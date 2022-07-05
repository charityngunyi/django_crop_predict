from django import template
from django.utils.safestring import mark_safe
import markdown
# register template filters in the same way as template tags
register = template.Library()
@register.filter(name='markdown')
def markdown_format(text):
    return mark_safe(markdown.markdown(text))