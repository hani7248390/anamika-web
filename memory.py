memory = []

def remember(user, ai):
    memory.append({
        "user": user,
        "ai": ai
    })

def recall():
    return memory[-10:]
