import {Component} from 'angular2/core';

@Component({
  //moduleId: module.id, 
  
  selector: 'arbitsection',
  templateUrl: 'app/templateLogArb.html',
  styles: [`/************ 
//--------------------------------
// GENERAL
//-------------------------------
************/
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
    color: #666;
    background: #f2f2f2; 
    font-size: 1em;
    line-height: 1.5em;
    
    padding-top: 80px;
}

h1 {
    font-size: 2.3em;
  line-height: 1.3em;
    margin: 15px 0;
    text-align: center;
    font-weight: 300;
}

p {
    margin: 0 0 1.5em 0;
}

img {
    max-width: 100%;
    height: auto;
}


/************ 
//-------------------------------
// CABECERA
//-------------------------------
************/
#main-header {
    background: #333;
    color: white;
    height: 80px;
    
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
}   
    #main-header a {
        color: white;
    }
    
    
/*
 * Logo
 */
#logo-header {
    float: left;
    padding: 15px 0 0 20px;
    text-decoration: none;
}
    #logo-header:hover {
        color: #0b76a6;
    }
    
    #logo-header .site-name {
        display: block;
        font-weight: 700;
        font-size: 1.2em;
    }
    
    #logo-header .site-desc {
        display: block;
        font-weight: 300;
        font-size: 0.8em;
        color: #999;
    }
    

/*
 * Navegación
 */
nav {
    float: right;
}
    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        padding-right: 20px;
    }
    
        nav ul li {
            display: inline-block;
            line-height: 80px;
        }
            
            nav ul li a {
                display: block;
                padding: 0 10px;
                text-decoration: none;
            }
            
                nav ul li a:hover {
                    background: #0b76a6;
                }
    



/************ 
//------------------------------
// CONTENIDO
//------------------------------
************/
#main-content {
    background: white;
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
}

    #main-content header,
    #main-content .content {
        padding: 40px;
    }
    
`]
//  styleUrls: ['app/arbiter.css']
})

export class AppArbiter {
  public Arbitername = 'Jorsh';
  
 // public title = 'Arbiter name ';
 // public subtitle = 'Jade : Stylus : BrowserSync'
}
