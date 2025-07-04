module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  },{
    method: "shell.run",
    params: {
      path: "app",
      message:"git pull"
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",              
      path: "app",               
      message: "uv pip install -r requirements.txt"
      }
    },
    {
      method: "notify",
      params: {
        html: "Update complete. Click the 'start' tab to get started!"
      }
    }
  ]
}
