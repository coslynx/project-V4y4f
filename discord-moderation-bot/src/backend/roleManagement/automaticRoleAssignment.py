class AutomaticRoleAssignment:
    def __init__(self):
        self.roles = {
            "newbie": "New Member",
            "regular": "Regular Member",
            "vip": "VIP Member"
        }

    def assign_role(self, member):
        if member.joined_at.days < 7:
            self.give_role(member, self.roles["newbie"])
        elif member.joined_at.days < 30:
            self.give_role(member, self.roles["regular"])
        else:
            self.give_role(member, self.roles["vip"])

    def give_role(self, member, role_name):
        role = discord.utils.get(member.guild.roles, name=role_name)
        if role:
            await member.add_roles(role)
        else:
            print(f"Role {role_name} not found")

    def remove_role(self, member, role_name):
        role = discord.utils.get(member.guild.roles, name=role_name)
        if role:
            await member.remove_roles(role)
        else:
            print(f"Role {role_name} not found")