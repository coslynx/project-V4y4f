import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def log_moderation_action(action, user, reason):
    logging.info(f'{action} - User: {user} - Reason: {reason}')