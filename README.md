
<div [color]="'green'">this is also from directive</div> 

It is used in html file where [color] is taken as both selector and for binding.


<div appDirective [color]="'red'" name></div>

If it is used then, appDirective is used as selcetor and [color] is for input binding
