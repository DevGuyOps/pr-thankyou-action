const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        // Setup Action
        const github_token = core.getInput('GITHUB_TOKEN');

        const context = github.context;
        if (context.payload.pull_request == null) {
            core.setFailed('No pull request found.');
            return;
        }

        const octokit = github.getOctokit(github_token);
        const pull_request_number = context.payload.pull_request.number;

        // Get PR details
        const { data: pr_details } = await octokit.pulls.get({
            ...context.repo,
            pull_number: pull_request_number,
        });

        // Comment on PR
        const message = "Thanks for opening a Pull Request @" + pr_details.user.login;
        octokit.issues.createComment({
            ...context.repo,
            issue_number: pull_request_number,
            body: message
        });

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();