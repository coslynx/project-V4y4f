import discord
from discord.ext import commands

class KeywordFilters(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_message(self, message):
        # Check if message contains any specific keywords
        keywords = ["keyword1", "keyword2", "keyword3"]
        
        if any(keyword in message.content for keyword in keywords):
            # Delete the message if it contains any keyword
            await message.delete()
            await message.channel.send(f"{message.author.mention}, your message has been deleted for containing a keyword.")

def setup(bot):
    bot.add_cog(KeywordFilters(bot))