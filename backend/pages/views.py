# pages/views.py
from django.shortcuts import render, get_object_or_404

from .models import Page


def page_view(request, url):
    page = get_object_or_404(Page, url=url)
    return render(request, 'pages/page.html', {'page': page})

