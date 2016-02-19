# author sri harsha ganja
# ganjash

import pdb
from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext,loader
import random,json
# Create your views here.
from django.contrib.auth import authenticate, login , logout
from django.template.context import RequestContext
import logging

track_css = []

def loginn(request):
    return HttpResponse(render(request,'polls/login.html'))

def home(request):
    return HttpResponse(render(request,'polls/home.html'))

def welcome(request):
    if(request.POST.get('query') is not None):
        #pdb.set_trace()
        stat = json.loads(request.POST.get('query'))
        request.session['stat']=stat
        request.session.modified = True
    
    return HttpResponse(render(request,'polls/welcome2.html' ))
    #return HttpResponse(render(request,'polls/phase.html' ))

def help(request):
    return HttpResponse(render(request,'polls/welcome.html' ))


def play(request):
    if('button_css' not in request.session.keys()):
        request.session['button_css']={'usa':'btn pagemenu','egypt':'btn pagemenu','canada':'btn pagemenu','russia':'btn pagemenu','uk':'btn pagemenu','china':'btn pagemenu','france':'btn pagemenu','india':'btn pagemenu','italy':'btn pagemenu','aust':'btn pagemenu','monument':'btn pagemenu','flag':'btn pagemenu','currency':'btn pagemenu','animal':'btn pagemenu'}    
    but = request.session['button_css']
    
    template = loader.get_template('polls/play.html')
    context = RequestContext(request,{'but':but,})
    #pdb.set_trace()
    return HttpResponse(template.render(context))
    
    #return HttpResponse(render(request,'polls/play.html'))
def stats(request):
    #pdb.set_trace()
    if('stat' not in request.session.keys()):
        request.session['stat']=[0,0,0,0]    
    stat = request.session['stat']
    template = loader.get_template('polls/stats.html')
    context = RequestContext(request,{'stat':stat,})
    #pdb.set_trace()
    return HttpResponse(template.render(context))




def phase1(request):
    #pdb.set_trace()
    #logging.debug("hiii I am logger")
    #pdb.set_trace();
#[ ,135, 819, 159, 198, 308, 46, 521, 809, 567, 220]
    
    #logging.debug(request.POST.lists)
    aust = {'m':[3,'asf123.jpg'],'f':[1,'23as3ykt.png'],'c':[2,'fgdthfxs.jpg'],'a':[4,'sa324fd.jpg'],'n':'aust'}
    usa ={'m':[1,'izs015583.jpg'],'f':[2,'mu67fg.jpg'],'c':[3,'ncBXjzb7i.jpg'],'a':[4,'sdefg.jpg'],'n':'usa'}
    canada ={'m':[4,'dsh5784.jpg'],'f':[2,'ht34df68.jpg'],'c':[3,'fdbdfvasd.jpg'],'a':[1,'tjtd54.jpg'],'n':'canada'}
    china ={'m':[4,'hmg4359gv.jpg'],'f':[1,'sgfh87067.jpg'],'c':[2,'oirthgio3.jpg'],'a':[3,'bvm685.jpg'],'n':'china'}
    egypt ={'m':[2,'ytzx23.jpg'],'f':[1,'tyd213r.jpg'],'c':[3,'jhk234.jpg'],'a':[4,'ghrrpzxc.jpg'],'n':'egypt'}
    france ={'m':[4,'gfhopo1123.jpg'],'f':[2,'adhrfd.png'],'c':[1,'cu09o3e.jpg'],'a':[3,'ghj89947.jpg'],'n':'france'}
    india ={'m':[2,'pzoqew.jpg'],'f':[3,'ggdfhit12.jpg'],'c':[1,'e78sdf.jpg'],'a':[4,'dsfg32498.jpg'],'n':'india'}
    italy ={'m':[4,'hgoiucvb.jpg'],'f':[3,'hgjerop.png'],'c':[1,'ure93ioe.jpg'],'a':[2,'fsdhyu.jpg'],'n':'italy'}
    russia ={'m':[1,'98r535.jpg'],'f':[3,'nbodfio.png'],'c':[4,'hrt46rf.jpg'],'a':[2,'jgjhgh897.jpg'],'n':'russia'}
    uk ={'m':[4,'fdghue.jpg'],'f':[3,'dsgffd.jpg'],'c':[2,'wh434ni.jpg'],'a':[1,'sdfpoiy.jpg'],'n':'uk'}
    #messages.info(request, 'Three credits remain in your account.')
    #country = {'australia':aust,'usa':usa}
    country = {'aust':aust,'usa':usa,'canada':canada,'china':china,'egypt':egypt,'france':france,'india':india,'italy':italy,'russia':russia,'uk':uk}
    #if(request.session[])
    
    coords = {'usa':['usamap.png',['635px','322px'],['592px','381px'],['541px','398px'],['115px','582px']],
                  'canada':['canadamap.png',['201px','336px'],['377px','565px'],['420px','600px'],['441px','648px']],
                  'china':['chinamap.png',['257px','371px'],['326px','412px'],['434px','371px'],['448px','396px']],
                   'india':['indiamap.png',['226px','299px'],['255px','272px'],['256px','320px'],['394px','394px']],
                  'uk':['ukmap.png',['428px','514px'],['479px','525px'],['470px','579px'],['419px','572px']],
                   'russia':['russiamap.png',['134px','435px'],['180px','462px'],['252px','527px'],['132px','484px']],
                   'aust':['australiamap.png',['248px','304px'],['206px','307px'],['195px','355px'],['257px','457px']],
                   'france':['francemap.png',['561px','232px'],['402px','300px'],['351px','290px'],['367px','329px']],
                   'egypt':['egyptmap.png',['370px','238px'],['410px','234px'],['375px','277px'],['190px','440px']],
                   'italy':['italymap.png',['265px','290px'],['320px','397px'],['340px','430px'],['369px','455px']]
                   }

    key = ''
    if('query' not in request.session.keys()):
        request.session['query']='usa'
    
    if(request.GET.get('phase2') is not None):         
        if('available' not in request.session.keys()):
            select = random.sample(country.keys(),4)
            hashh = random.sample(range(1,5),4)
            dictt = []
            for i in xrange(4):
                dictt.append([select[i],hashh[i],country[select[i]]['m'][1]] )
            request.session['available']=[dictt]
            dictt = []
            select = random.sample(country.keys(),4)
            hashh = random.sample(range(1,5),4)
            for i in xrange(4):
                dictt.append([select[i],hashh[i],country[select[i]]['f'][1]] )
            request.session['available'].append(dictt)
            dictt = []
            select = random.sample(country.keys(),4)
            hashh = random.sample(range(1,5),4) 
            for i in xrange(4):
                dictt.append([select[i],hashh[i],country[select[i]]['c'][1]] )
            request.session['available'].append(dictt)
            dictt = []
            select = random.sample(country.keys(),4)
            hashh = random.sample(range(1,5),4)
            for i in xrange(4):
                dictt.append([select[i],hashh[i],country[select[i]]['a'][1]] )
            request.session['available'].append(dictt)
            request.session['artifacts'] = ['monument','flag','currency','animal']
            request.session.modified = True
        #if('monument' not in request.session.keys()):
        #    dictt = {}
        #    for i in xrange(4):
        #        dictt[select[i]] = [hashh[i],country[select[i]]['m'][1],0]
        #    request.session['available']=[dictt]
        
        #if('flag' not in request.session.keys()):
        #    dictt = {}
        #    for i in xrange(4):
        #        dictt[select[i]] = [hashh[i],country[select[i]]['f'][1],0]
        #    request.session['available'].append(dictt)
        # 
        #if('currency' not in request.session.keys()):
        #    dictt = {}
        #    for i in xrange(4):
        #        dictt[select[i]] = [hashh[i],country[select[i]]['c'][1],0]
        #    request.session['available'].append(dictt)
        #    #request.session['currency']=dictt
        #
        #if('animal' not in request.session.keys()):
        #    dictt = {}
        #    for i in xrange(4):
        #        dictt[select[i]] = [hashh[i],country[select[i]]['a'][1],0]
        #    request.session['available'].append(dictt)
            #request.session['animal']=dictt
            
        
        #return HttpResponse(render(request,'polls/phase1.html'))
    
            #dictt[select[i]] = [hashh[i],country[select[i]]['m'][1]]

    #request.session['sample']='sample_reply'
    #if(request.POST.get('query') is not None):
    #cntry= request.POST.get('query')
    #    logging.debug(request.POST.lists)
    #return HttpResponse(cntry, content_type="text/plain")
    #if(request.POST.lists() != []):
    #    cntry = request.POST.lists;
    #    return HttpResponse(cntry, content_type="text/plain")
    if(request.GET.get('query') is not None):
        cntry = request.GET.get('query')
    #    #return HttpResponse(str(country[cntry]),content_type="text/plain")
        return HttpResponse(json.dumps(country[cntry]), content_type="application/json")
    
    if(request.GET.get('country') is not None):
        key = request.GET.get('country')

            #   
    if(request.POST.get('query') is not None):
        cntry = request.POST.get('query')
        request.session['button_css'][cntry]='btn2 pagemenu'
        request.session.modified = True
        
        #return HttpResponse(str(country[cntry]),content_type="text/plain")
        return HttpResponse(json.dumps(country[cntry]), content_type="application/json")
    #pdb.set_trace();
    n =4 #no.of unique images to be matched
    id_list = random.sample(range(1,100),n);
    template = loader.get_template('polls/phasex.html')
    #template = loader.get_template('polls/phasex2.html')
    #template = loader.get_template('polls/phasex3.html')
    #template = loader.get_template('polls/phasex4.html')
    #template = loader.get_template('polls/phasex5.html')
    #template = loader.get_template('polls/phasex6.html')
    #template = loader.get_template('polls/phasex7.html')
    #template = loader.get_template('polls/phasex8.html')
    #template = loader.get_template('polls/phasex9.html')
    
    # m map, f flag, c currency, a animal , n name
    template = loader.get_template('polls/phasex.html')
    context = RequestContext(request,{'id_list':id_list,'country':country[key],'coords':coords[key],'key':key,})
    return HttpResponse(template.render(context))
    
def phase2(request):
    #pdb.set_trace()
    key = request.session.get('key')
    #pdb.set_trace()
    if('validator' not in request.session.keys()):
    #    request.session['selector']=0
        request.session['validator']=[['m',-2],['f',-2],['c',-2],['a',-2]]

    if(request.GET.get('artifacts') is not None):
        key = request.GET.get('artifacts')
        request.session['key']=key
        request.session.modified = True


    if(request.GET.get('result') is not None):
        if('1' == request.GET.get('result')):
            request.session['validator'][(request.session['artifacts']).index(key)][1] = 1
        else:
            request.session['validator'][(request.session['artifacts']).index(key)][1] = 0
    #    request.session['selector'] += 1 
    
    #rendr = request.session['selector']
    #selectionn = request.session['available'][request.session['selector']]
    selectionn = request.session['available'][(request.session['artifacts']).index(key)]
    #if('validator' not in request.session.keys()):
    #    request.session['validator']=[['m',-2],['f',-2],['c',-2],['a',-2]]
    
    if(request.POST.get('query') is not None):
        #pdb.set_trace()
        cntry_imp = request.POST.get('query')
        request.session['button_css'][cntry_imp]='btn2 pagemenu'
        request.session.modified = True
    #    #return HttpResponse(str(country[cntry]),content_type="text/plain")
        return HttpResponse(json.dumps([selectionn[0][1],selectionn[1][1],selectionn[2][1],selectionn[3][1]]), content_type="application/json")
    
    if(request.GET.get('query') is not None):
        #pdb.set_trace()        
        
        cntry_imp = request.GET.get('query')
        request.session['button_css'][cntry_imp]='btn2 pagemenu'
        request.session.modified = True
        
         #return HttpResponse(str(country[cntry]),content_type="text/plain")
        return HttpResponse(json.dumps([selectionn[0][1],selectionn[1][1],selectionn[2][1],selectionn[3][1]]), content_type="application/json")
    
    
    template = loader.get_template('polls/phase1.html')
    # m map, f flag, c currency, a animal , n name
    imgg = sorted(selectionn ,key = lambda x:x[1])
    context = RequestContext(request,{'selectionn':selectionn,'imgg':imgg,'artifact':key,})
    return HttpResponse(template.render(context))
    #x =[1,2,3,4]
    
    #logging.debug("hiii I am logger")
    #pdb.set_trace();
    #[ ,135, 819, 159, 198, 308, 46, 521, 809, 567, 220]
    
    #logging.debug(request.POST.lists)
    



def identify(request):
    #username = request.POST['username']
    #password = request.POST['password']
    username="sample"
    password="sample"
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            if(request.POST.get('query') is not None):
                #pdb.set_trace()
                stat = json.loads(request.POST.get('query'))
                request.session['stat']=stat
                request.session.modified = True
    
            return HttpResponse(render(request,'polls/welcome2.html'))
            #return HttpResponse(render(request,'polls/phase.html'))            # Redirect to a success page.
        else:
            return HttpResponse("<HTML><H1>USER ACCOUNT IS DISABLED</H1> </HTML>")
            # Return a 'disabled account' error message
            #return
    else:
        # Return an 'invalid login' error message.
        return HttpResponse("<HTML><H1>INVALID LOGIN</H1> </HTML>")

def logout_view(request):
    template = loader.get_template('polls/home.html')
    request.session.flush()
    context = RequestContext(request)
    return HttpResponse(template.render(context))
    
    # m map, f flag, c currency, a animal , n name
    
    
    #return HttpResponse(render(request,'polls/home.html'))
    
    #pdb.set_trace()
    #logout(request)
    #request.session.flushAll()
    
    #return HttpResponse(render(request,'polls/home.html'))
    # Redirect to a success page
     
