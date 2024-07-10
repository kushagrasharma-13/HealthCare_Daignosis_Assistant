import os
import json
from dotenv import load_dotenv
from autogen import AssistantAgent, UserProxyAgent

load_dotenv()

GROQ_API_KEY=os.environ.get('GROQ_API_KEY')
print("#########################   GROQ API   #############################")
if GROQ_API_KEY==None:
    with open('./config.json') as file:
        data = json.load(file)
        GROQ_API_KEY = data.get('GROQ_API_KEY')
print("#########################   GROQ API   #############################")
        
llm_config = {
    "model": "llama3-70b-8192",
    "api_key": GROQ_API_KEY,
    "api_type": "groq",
    }


def form_reponse(age, gender, symptoms, medical_history):
    class MedicalAssistantAgent(AssistantAgent):
        def __init__(self, name="medical_assistant", llm_config=None):
            system_message = "You are a medical assistant. Provide medical remedies for diseases based on the user's symptoms, age, and gender. Make sure the content is in proper markdown format with appropriate line breaks "
            super().__init__(name=name, system_message=system_message, llm_config=llm_config)

    class NutritionAssistantAgent(AssistantAgent):
        def __init__(self, name="nutrition_assistant", llm_config=None):
            system_message = "You are a nutrition assistant. Provide dietary advice and meal plans based on the user's nutritional needs and goals. Make sure the content is in proper markdown format with appropriate line breaks"
            super().__init__(name=name, system_message=system_message, llm_config=llm_config)

    class PsychologicalAssistantAgent(AssistantAgent):
        def __init__(self, name="psychological_assistant", llm_config=None):
            system_message = "You are a psychological assistant. Provide mental health support and coping strategies based on the user's emotional state and experiences. Make sure the content is in proper markdown format with appropriate line breaks"
            super().__init__(name=name, system_message=system_message, llm_config=llm_config)

    class MedicalUserProxyAgent(UserProxyAgent):
        def __init__(self, name="user_proxy", llm_config=None):
            super().__init__(name=name, llm_config=llm_config, human_input_mode="NEVER", max_consecutive_auto_reply=0, code_execution_config=False)

    medical_assistant = MedicalAssistantAgent(llm_config=llm_config)
    nutrition_assistant = NutritionAssistantAgent(llm_config=llm_config)
    psychological_assistant = PsychologicalAssistantAgent(llm_config=llm_config)

    medical_user_proxy = MedicalUserProxyAgent()
    user_message = (
        f"Symptoms: {symptoms}\n"
        f"Age: {age}\n"
        f"Gender: {gender}\n"
        f"Medical history: {medical_history}"
    )

    messages = {}
    for assistant in [medical_assistant, nutrition_assistant, psychological_assistant]:
        messages[assistant] = medical_user_proxy.initiate_chat(assistant, message=user_message)

    return {
        'medical': [msg['content'] for msg in messages[medical_assistant].chat_history if msg['role'] == 'user'],
        'nutrition': [msg['content'] for msg in messages[nutrition_assistant].chat_history if msg['role'] == 'user'],
        'psychological': [msg['content'] for msg in messages[psychological_assistant].chat_history if msg['role'] == 'user']
    }


def concise_report(medical_response):
    def medical(medical_response):
        class ConsiceAgent(AssistantAgent):
            def __init__(self, name="consice_assistant", llm_config=None):
                system_message = "You are given medical data of a user, You work is to reduce it to a consice and effective medical history report with exactly less than 25 words."
                super().__init__(name=name, system_message=system_message, llm_config=llm_config)

        class ConsiceUserProxyAgent(UserProxyAgent):
            def __init__(self, name="user_proxy", llm_config=None):
                super().__init__(name=name, llm_config=llm_config, human_input_mode="NEVER", max_consecutive_auto_reply=0, code_execution_config=False)

        consice_assistant = ConsiceAgent(llm_config=llm_config)
        consice_user_proxy = ConsiceUserProxyAgent()
        user_message = (
            f"Medical Response: {medical_response}"
        )
        return consice_user_proxy.initiate_chat(consice_assistant, message=user_message)
    

    def nutrition(medical_response):
        class ConsiceAgent(AssistantAgent):
            def __init__(self, name="consice_assistant", llm_config=None):
                system_message = "You are given medical data of a user, You work is to reduce it to a consice and effective medical history report with exactly less than 25 words."
                super().__init__(name=name, system_message=system_message, llm_config=llm_config)

        class ConsiceUserProxyAgent(UserProxyAgent):
            def __init__(self, name="user_proxy", llm_config=None):
                super().__init__(name=name, llm_config=llm_config, human_input_mode="NEVER", max_consecutive_auto_reply=0, code_execution_config=False)

        consice_assistant = ConsiceAgent(llm_config=llm_config)
        consice_user_proxy = ConsiceUserProxyAgent()
        user_message = (
            f"Medical Response: {medical_response}"
        )
        return consice_user_proxy.initiate_chat(consice_assistant, message=user_message)
    

    def pyscological(medical_response):
        class ConsiceAgent(AssistantAgent):
            def __init__(self, name="consice_assistant", llm_config=None):
                system_message = "You are given medical data of a user, You work is to reduce it to a consice and effective medical history report with exactly less than 25 words."
                super().__init__(name=name, system_message=system_message, llm_config=llm_config)

        class ConsiceUserProxyAgent(UserProxyAgent):
            def __init__(self, name="user_proxy", llm_config=None):
                super().__init__(name=name, llm_config=llm_config, human_input_mode="NEVER", max_consecutive_auto_reply=0, code_execution_config=False)

        consice_assistant = ConsiceAgent(llm_config=llm_config)
        consice_user_proxy = ConsiceUserProxyAgent()
        user_message = (
            f"Medical Response: {medical_response}"
        )
        return consice_user_proxy.initiate_chat(consice_assistant, message=user_message)
    
    
    return {
        'medical': medical(medical_response['medical']),
        'nutrition': nutrition(medical_response['nutrition']),
        'psychological': pyscological(medical_response['psychological'])
    }