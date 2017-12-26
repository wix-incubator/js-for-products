# JS intro for product managers

All tasks should be done in Chrome developer tools.  
To open developer tools:

 - mac:  cmd+option+i
 - windows: F12

[Link to slides](https://docs.google.com/a/wix.com/presentation/d/1y5msm3EJPhLRkgE2KAraXw_y8c_3_q6TXhYLcSMVEb0/edit?usp=sharing)

**To start:**   
Go to example.com   
Open part1 directory


**How to run the tasks code**       
In the developer tools, select the "Sources" tab       
On the left pane, select "Snippets"       
Create a new snippet (click on "+ New snippet")       
       
       
Paste this code inside the snippet:

    function runMe() {
     console.log('Start')
     
     // write your code here
     
     console.log('end')
    }


To run the code, click on the bottom right corner > button, or hit cmd+enter.        
To print messages to the console, use the console.log function as used in the above function.        
To return a value, use the return statement.        

*Example*

    function runMe() {
     console.log('Start')
     
     const myCoolVariable = 5
     return myCoolVariable * 2
     
     console.log('end')
    }
