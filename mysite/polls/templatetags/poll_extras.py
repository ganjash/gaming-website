# author sri harsha ganja
# ganjash

from django import template
register = template.Library()

@register.filter
def get_item(dictionary, key):
    return dictionary.get(key)
    
@register.filter
def get_range(val):
    return range(val)
