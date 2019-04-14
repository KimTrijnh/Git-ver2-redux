
export async function getIssue(repo){
    let url = `https://api.github.com/repos/${repo}/issues?state=all`
    try{
        let response = await fetch(url)
        let data = await response.json()
        this.setState({issues: data, search: repo, isLoading: false})
    }
    catch(error) {
        console.log(error)
    }
}


 