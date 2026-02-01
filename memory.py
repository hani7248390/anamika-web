# Simple in-memory brain
memory = []

def save_memory(user_text, ai_text):
    memory.append({
        "user": user_text,
        "ai": ai_text
    })

def get_memory():
    return memory[-5:]
