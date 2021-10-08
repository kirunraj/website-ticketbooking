
// url module 

var http=require("http");
var fs=require("fs");
var Url=require("Url");
http.createServer(function(req,res)
{
    var weblink=Url.parse(req.Url,true);
    var filepath="."+weblink.pathname;
  fs.readFile(filepath,function(err,data)
  {
    if(err)
    {
         res.writeHead("404",{'Content-type':'text/html'});
         return res.end("404 not found.......................!")
        
    }
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8081);

