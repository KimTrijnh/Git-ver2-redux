 async function getIssue(search){
    let url = `https://api.github.com/repos/${search}/issues?state=all`
    try{
        let response = await fetch(url)
        let data = await response.json()
    }
    catch(error) {
        console.log(error)
    }
}

 