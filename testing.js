useEffect(()=>{
    fetchUsersList();
 },[])

 const fetchUsersList = async () => { // done
     const data = await axios(`https://api.github.com/users`, config)
     console.log('get users : ',data?.data)
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
     fetchCommitsList();
 }

 const fetchCommitsList = async () => {
     const data = await axios(`https://api.github.com/repos/${owner}/${repo}/commits`, config)
     console.log('get commits list : ', data?.data)
     fetchCommentsList();
 }

 const fetchCommentsList = async () => {
     const data = await axios(`https://api.github.com/repos/${owner}/${repo}/comments`, config)
     console.log('get comments list : ', data?.data)
     fetchWeeklyCodeList();
 }

 const fetchWeeklyCodeList = async () => {
     const data = await axios(`https://api.github.com/repos/${owner}/${repo}/stats/contributors`, config)
     console.log('get code info : ', data?.data)
 }