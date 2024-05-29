class WelcomeMessages:
    def __init__(self):
        self.welcome_message = "Welcome to our server! We hope you enjoy your stay."

    def set_welcome_message(self, message):
        self.welcome_message = message

    def get_welcome_message(self):
        return self.welcome_message

    def send_welcome_message(self, user):
        # Code to send a welcome message to the user
        pass