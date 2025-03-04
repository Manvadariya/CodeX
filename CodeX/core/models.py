from django.db import models
from django.contrib.auth.models import User

LANGUAGE_CHOICES = [
    ('python', 'Python'),
    ('javascript', 'JavaScript'),
    ('cpp', 'C/C++'),
    ('java', 'Java'),
]

class CodeSnippet(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    language = models.CharField(max_length=20, choices=LANGUAGE_CHOICES)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='snippets')
    code_content = models.TextField()
    user_input = models.TextField(
        blank=True, 
        null=True, 
        help_text="Input provided by the user for code execution"
    )
    requirements = models.TextField(
        blank=True, 
        null=True, 
        help_text="Additional requirements or specifications for the code"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

class CodeExecution(models.Model):
    code = models.ForeignKey(CodeSnippet, on_delete=models.CASCADE, related_name='executions')
    executed_at = models.DateTimeField(auto_now_add=True)
    code_snapshot = models.TextField()
    execution_result = models.TextField(blank=True, null=True)
    execution_status = models.CharField(
        max_length=20,
        choices=[
            ('SUCCESS', 'Success'),
            ('ERROR', 'Error'),
            ('TIMEOUT', 'Timeout'),
            ('PENDING', 'Pending')
        ],
        default='PENDING'
    )
    
    def __str__(self):
        return f"Execution of {self.code.title} at {self.executed_at}"

class AIAssistance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ai_assistance')
    code = models.ForeignKey(CodeSnippet, on_delete=models.CASCADE, related_name='ai_assistance', null=True, blank=True)
    prompt = models.TextField()
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"AI Assistance for {self.user.username} at {self.created_at}"
