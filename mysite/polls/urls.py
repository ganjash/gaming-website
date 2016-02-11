from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.home,name='home'),
    url(r'^identify/$', views.identify,name='identify'),
    url(r'^detail/$',views.loginn,name='detail'),
    url(r'^logout/$',views.logout_view,name='logout'),
    url(r'^home/$', views.home,name='home'),
    url(r'^welcome/$',views.welcome,name='welcome'),
    url(r'^play/$',views.play,name='play'),
    url(r'^phase1/$',views.phase1,name='phase1'),
    url(r'^phase2/$',views.phase2,name='phase2'),
    url(r'^stats/$',views.stats,name='stats'),
    url(r'^help/$',views.help,name='help'),
    #url(r'^phase1/(?P<query>\w?)',views.phase1,name='phase1'),
]

