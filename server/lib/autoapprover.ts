import { getRepository } from 'typeorm';
import { MediaRequest } from '../entity/MediaRequest';
import { MediaRequestStatus } from '../constants/media';
import logger from '../logger';

class AutoApprover {
  public autoApprove(): void {
    const requestRepository = getRepository(MediaRequest);
    const now = new Date();
    logger.debug(`Now: ${now}`);
    const threshold = new Date(new Date(now).setMinutes(now.getMinutes() - 5));
    logger.debug(`Threshold: ${threshold}`);
    try {
      const requests = requestRepository.find({
        where: {
          status: MediaRequestStatus.PENDING,
        },
      });
      const updateRequests: MediaRequest[] = [];
      requests.then((response) => {
        response.forEach((request) => {
          if (request.createdAt >= threshold) {
            request.status = MediaRequestStatus.APPROVED;
            updateRequests.push(request);
            logger.debug(
              `Approved request for ${request.media.id}, createdAt: ${request.createdAt}`
            );
          } else {
            logger.debug(
              `Skipped request ${request.media.id}, createdAt: ${request.createdAt}`
            );
          }
        });
        logger.debug(`Updating ${updateRequests.length} requests`);
        requestRepository.save(updateRequests);
        // return response.status(200).json();
      });
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
