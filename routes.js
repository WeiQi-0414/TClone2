const displayContent = (req, res) => {
    const url = req.url;
    // set a const varible named as : method 
    // to record the POST or GET
    const method = req.method;
    if(url == "/profile"){
        res.setHeader('Content-Type','text/html');
        res.write('<p>This is a profile page.</p>');
        return res.end();
    }
    else if(url == "/"){
        res.setHeader('Content-Type','text/html');
        res.write('<p>cheeseburgers</p>');
        return res.end();
    }
    // when the submitted a data, the method changed to "POST", it will shows below content
    else if(url == "/settings" && method == "POST"){
        res.setHeader('Content-Type','text/html');
        res.write('<h1>Form was submitted</h1>');
        return res.end();
    }
    else if(url == "/settings"){
        res.setHeader('Content-Type','text/html');
        // the res.write() changes the method -> method = "POST"
        res.write('<h1>Setting Page</h1><form action="/settings" method="POST"><input type="text"><button type="submit">Press Me</button></form>');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<p>Page not found</p>');
    res.end();
}
module.exports = displayContent;