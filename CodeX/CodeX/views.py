from django.shortcuts import render

def home_page(request):
    """
    View function for the home page of the site.
    """
    # You can add context data to pass to the template here
    context = {}
    
    # Render the HTML template home.html with the data in the context
    return render(request, 'home.html', context)
