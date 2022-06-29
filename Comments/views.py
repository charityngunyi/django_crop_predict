from django.shortcuts import render,get_object_or_404
from .models import Question
from .forms import QuestionForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages

# Create your views here.


@login_required
def question(request):
    if request.method == 'POST':
        question_form = QuestionForm(data=request.POST)
        if question_form.is_valid():
            # Create a new user object but avoid saving it yet
            new_quest = question_form.save(commit=False)
            # Set the chosen password
            new_quest.author = request.user

            new_quest.save()
            # company = Company.objects.create(user=new_user)
            messages.success(request, 'Question added successfully')
            return render(request, 'question/question_successiful.html', {'new_quest': new_quest})
    else:
        question_form = QuestionForm()
    return render(request, 'question/question.html', {'quest_form': question_form})


def question_list(request):
    questions = Question.objects.filter(active=True).order_by('-updated')[:20]
    return render(request, 'question/quest_list.html', {'questions': questions})


def question_detail(request, id):
    quest_detail = get_object_or_404(Question, id=id)
    return render(request, 'question/quest_detail.html', {'quest_detail': quest_detail})


def dashboard(request):
    return render(request, 'question/dashboard.html')


@login_required
def thedashboard(request):
    the_questions = Question.objects.filter(active=True, author=request.user).order_by('-updated')[:10]
    return render(request, 'question/my_quest_list.html', {'the_questions': the_questions})


@login_required
def my_questions(request):
    the_questions = get_object_or_404(Question, active=True)
    return render(request, 'question/my_quest_list.html', {'the_questions': the_questions})
