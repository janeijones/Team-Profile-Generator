const fs = require('fs')

function appendEOF(){
    return fs.appendFileSync('./dist/sample.html',`</div>
    </div>
    
</body>
</html>`, function (error){
    console.log(error)
})
}
module.exports = appendEOF;
