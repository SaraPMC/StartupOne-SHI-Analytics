    // Full Resolution Script
    
    var x0;
    var y0;
    
    var boxx0;
    var boxy0;

    var relativex0;
    var relativey0;

    var currentleft;
    var currenttop;

    var selectionleft;
    var selectiontop;
    
    //var previewenableflag = 0;
    var menubaroverrideflag = 0;
    var loadflag = 0;
    
    var flagtemporarydisable = 0;
    
    function ignorefullresolution()
    {
        flagtemporarydisable = 1;
    }

    function checklocation(x,y)
    {
        var locationflag = 0;
    
        if ((((x+y)/100) % 2) == 0)
        {
            locationflag = 1;
        }
        
        locationflag = 1;
        
        return locationflag;
    }


    function showpreview()
    {   
        //var originalhtml = document.getElementById('hiddendiv').innerHTML;
        //var newhtml = originalhtml.replace('showpreview()','');
        //document.getElementById('targetdiv').style.width = document.getElementById('hiddendiv').style.width;
        //document.getElementById('targetdiv').style.height = document.getElementById('hiddendiv').style.height;
        //document.getElementById('targetdiv').innerHTML = newhtml;
        
        if(document.getElementById('targetimagemessage'))
        {
            document.getElementById('targetimagemessage').innerHTML = 'This is';
        }
        
        if(document.getElementById('targetimagesearching'))
        {
            document.getElementById('targetimagesearching').style.display = 'none';
        }
        
        document.getElementById('targetimage').style.height = '';
        document.getElementById('targetimage').style.border = '1px solid #999999';
        document.getElementById('targetimage').style.visibility = 'visible';
    }

    
    function newHttpReq()
    {
        var newRequest = null;
        
        try
        {
            newRequest = new XMLHttpRequest();
        }
        catch(trymicrosoft)
        {
            try
            {
                newRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch(othermicrosoft)
            {
                try
                {
                    newRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(failed)
                {
                    newRequest = null;
                }           
            }
        }
        
        return newRequest;
    
    }

    var request = newHttpReq();


    function previewimage()
    {   

        if(previewenableflag == 0 || menubaroverrideflag == 1 || flagtemporarydisable == 1)
        {
            flagtemporarydisable = 0;
            return;
        }

        locationflag = checklocation(boxx0,boxy0);
        
        if(locationflag == 1)
        {

            selection = document.getElementById('targetdiv');
            selection.style.pixelLeft = selectionleft;
            selection.style.left = selectionleft + 'px';
            selection.style.pixelTop = (selectiontop + 125);
            selection.style.top = (selectiontop + 125) + 'px';
            selection.style.width = '400px';
            selection.style.height = '100px';
            selection.style.visibility = 'visible';
            selection.style.overflow = 'visible';
            selection.innerHTML = "<div style='float: left; width: 350px; height: 20px; padding: 15px; background-color: #FFFFFF; border: 1px solid #666666; border-radius: 6px; box-shadow: 0px 0px 20px #444444;'><p style='float: left; width: 170px; padding-top: 4px; overflow: hidden; font: 8pt arial; color: #444444;'>Loading Full-Resolution Preview</p><img src='/assets/images/Searching.gif' style='float: left;'></div>";

            var widthactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('width');
            var heightactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('height');

            widthactual = parseInt(widthactual);
            heightactual = parseInt(heightactual);          
            
            var url = "/showpreviewimage.php?artworkid=" + artworkid + "&widthmedium=" + widthactual + "&heightmedium=" + heightactual + "&x=" + boxx0 + "&y=" + boxy0;         

            if((request.readyState != 4) && (request.readyState != 0))
            {
                request.abort();
                request = newHttpReq();
            }
            
            //alert(url);
            //return;

            request.open("GET",url,true);
            request.onreadystatechange = updatepage;
            request.send(null);


        }
        else
        {
            return;
        }   
    }


   function updatepage()
   {
   
        try 
        {
            if(request.readyState == 4)
            {
            }
        
            if(request.status == 200)
            {
            }
        }
        catch (e)
        {
            return;
        }
   
   
        if (request.readyState == 4)
        {
            if(request.status == 200)
            {
                var responseparts = request.responseText.split("<break>");
                
                var imagedata = responseparts[0].split("**");
                var imagewidth = parseInt(imagedata[0]) + 65;
                var imageheight = parseInt(imagedata[1]) + 135;

                //var targetobject = document.getElementById("hiddendiv");
                var targetobject = document.getElementById("targetdiv");
                targetobject.style.width = imagewidth + 'px';
                targetobject.style.height = imageheight + 'px';
                targetobject.innerHTML = responseparts[1];
                //targetobject.style.visibility = "visible";
            }
        }
   }


    function MouseMove(evt) 
    {
        if(previewenableflag == 0 || loadflag == 0 || menubaroverrideflag == 1 || flagtemporarydisable == 1)
        {
            return;
        }

        var widthactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('width');
        var heightactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('height');

        widthactual = parseInt(widthactual);
        heightactual = parseInt(heightactual);
        
        currentleft = 0;
        currenttop = 0;

        var obj = document.getElementById('mainimage');
        if (obj.offsetParent)
        {
            do 
            {
                currentleft += obj.offsetLeft;
                currenttop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }       
            
        mouseoverflag = 1;
    
        if(document.documentElement.scrollTop && !document.body.scrollTop)
        {
            x0 = evt.clientX + document.documentElement.scrollLeft;
            y0 = evt.clientY + document.documentElement.scrollTop;
        }
        else
        {
            x0 = evt.clientX + document.body.scrollLeft;
            y0 = evt.clientY + document.body.scrollTop;
        }

        //if(x0 < currentleft || x0 > (currentleft + widthmedium))
        if(x0 < currentleft || x0 > (currentleft + widthactual))
        {
            mouseoverflag = 0;
        }
        
        //if(y0 < currenttop || y0 > (currenttop + heightmedium))
        if(y0 < currenttop || y0 > (currenttop + heightactual))
        {
            mouseoverflag = 0;
        }
                    
        relativex0 = x0 - currentleft;
        relativey0 = y0 - currenttop;
        
        boxx0 = relativex0 - (relativex0 % 100);
        boxy0 = relativey0 - (relativey0 % 100);

        selectionleft = parseInt(boxx0 + currentleft);
        selectiontop = parseInt(boxy0 + currenttop);
        
        selection = document.getElementById('selectionbox');

        locationflag = checklocation(boxx0,boxy0);
        
        if(locationflag == 1)
        {
            selection.style.border = '3px solid #00FF00';
            selection.style.filter = 'alpha(opacity = 100)';
            selection.style.opacity = '1';
        }
        else
        {
            selection.style.border = '2px solid #00FF00';
            selection.style.filter = 'alpha(opacity = 25)';
            selection.style.opacity = '0.25';
        }
        
        if(mouseoverflag == 1)
        {
            selection.style.pixelLeft = selectionleft;
            selection.style.left = selectionleft + 'px';
            selection.style.pixelTop = selectiontop;
            selection.style.top = selectiontop + 'px';
        
            showselectionbox();
        }
        else
        {
            hideselectionbox();
        }       

    }
    
    function showselectionbox()
    {
        document.getElementById('selectionbox').style.visibility = 'visible';
    }   

    function hideselectionbox()
    {
        document.getElementById('selectionbox').style.visibility = 'hidden';
    }
    
    function hidepreview()
    {
        document.getElementById('targetimage').style.visibility = 'hidden';
        document.getElementById('targetdiv').style.visibility = 'hidden';   
    }

    // End - Full Resolution Script 
