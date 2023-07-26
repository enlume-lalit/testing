const token = "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"
const owner = "enlume-lalit"
const repo = "testing"

const config = {
    headers: {
        authorization : token
    }
}

useEffect(()=>{
   fetchUsersList();
},[])

const fetchUsersList = async () => { // done
    const data = await axios(`https://api.github.com/users`, config)
    console.log('get users : ', data?.data)
    fetchRepoList();
}

const fetchRepoList = async () => { // done
    const data = await axios(`https://api.github.com/users/${owner}/repos`, config)
    console.log('get repos list : ', data?.data)
    fetchBranchesList();
}

const fetchBranchesList = async () => {
    const data = await axios(`https://api.github.com/repos/${owner}/${repo}/branches`, config)
    console.log('get branches list : ', data?.data)
    fetchPullRequestList();
}

const fetchPullRequestList = async () => {
    const data = await axios(`https://api.github.com/repos/${owner}/${repo}/pulls`, config)
    console.log('get PR list : ', data?.data)
    fetchCommitsList(data?.data[0]?.comments_url);
    fetchCommentsList(data?.data[0]?.commits_url);
}

const fetchCommitsList = async (commits_url : string) => {
    // https://api.github.com/repos/${owner}/${repo}/commits
    const data = await axios(`${commits_url}`, config)
    console.log('get commits list : ', data?.data)
}

const fetchCommentsList = async (comments_url : string) => {
    // https://api.github.com/repos/${owner}/${repo}/comments
    const data = await axios(`${comments_url}`, config)
    console.log('get comments list : ', data?.data)
    fetchWeeklyCodeList();
}

const fetchWeeklyCodeList = async () => {
    const data = await axios(`https://api.github.com/repos/${owner}/${repo}/stats/contributors`, config)
    console.log('get code info : ', data?.data)
}