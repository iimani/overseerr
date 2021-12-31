import { getRepository } from 'typeorm';
import { MediaRequest } from '../entity/MediaRequest';
import { MediaRequestStatus } from '../constants/media';
import logger from '../logger';

class AutoApprover {
  public async autoApprove(): Promise<void> {
    const requestRepository = getRepository(MediaRequest);
    const now = new Date();
    logger.debug(`Now: ${now}`);
    const threshold = new Date(new Date(now).setMinutes(now.getMinutes() - 5));
    logger.debug(`Threshold: ${threshold}`);
    try {
      const requests = await requestRepository.find({
        where: {
          status: MediaRequestStatus.PENDING,
        },
      });
      logger.debug(`Found ${requests.length} pending requests`);

      for (const request of requests) {
        if (now >= threshold) {
          request.status = MediaRequestStatus.APPROVED;
          logger.debug(
            `Approved request for ${request.media.id}, createdAt: ${request.createdAt}`
          );
        } else {
          logger.debug(
            `Skipped request ${request.media.id}, createdAt: ${request.createdAt}`
          );
        }
      }

      await requestRepository.save(requests);
    } catch (e) {
      logger.error('Error processing request update', {
        label: 'Media Request',
        message: e.message,
      });
    }
  }
}

const autoApprover = new AutoApprover();

export default autoApprover;
