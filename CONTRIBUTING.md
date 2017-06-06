# Contributing Guidelines

Interested in making a contribution? Great! Just read through this guide and you should be good to go! If you have any questions or concerns, feel free to reach out to us in our Slack [community channel](https://slackin-pypmyuhqds.now.sh/).

## TOC

- [Forks](#forks)
- [Commit Messages](#commit-messages)
- [Issues](#issues)
- [Contribution tips and guidelines](#quick-contribution-tips-and-guidelines)

## Forks

We encourage the use of forks, even for our core maintainers. The following steps describe the procedure to create a new fork and contribute back to the upstream repo:

### Clone the repo

1. Fork this repository.
1. Clone your forked repo onto your machine: `git clone https://github.com/<yourusername>/react-frontend`
1. Enter the cloned repo directory: `cd react-frontend`
1. Add the 3Blades repo as a new remote upstream repository: `git remote add upstream https://github.com/3blades/react-frontend.git`
1. Verify that `upstream` was added correctly: `git remote -v`
1. Fetch the latest branches for all remotes: `git fetch --all`
1. Set your local `master` branch to track `upstream/master`: `git branch -u upstream/master master`

Initial setup is complete. Your local `master` branch now tracks to the `master` branch in the `3blades/react-frontend` repository so you will always have the most up-to-date code when running `git pull` when on `master`.

### Contribute code
1. On `master`, pull the latest changes from `3blades/react-frontend`: `git pull`
1. Create a local branch for your feature or fix: `git checkout -b my-fix-or-feature-branch`
1. Make the necessary changes in your `my-fix-or-feature-branch` branch and commit them.
1. Push your changes to your remote: `git push -u origin my-fix-or-feature-branch`
1. Submit a pull request from your branch to `https://github.com/3blades/react-frontend` and await review. 

In your pull request description, please include the issue number related to your code changes. It's possible that an issue for the problem you are trying to solve does not exist in which case please help us open one. Even little things like typos in a document are worth documenting.

## Commit Messages

Commit messages in `react-frontend` start with a prefix that coincides with a commit `label`. Labels are listed below:

- `fix`: If the commit is working towards a bug fix.
- `feature`: If the commit is working towards a new feature.
- `chore`: If the commit was a chore, like updating a dependency or updating Travis.
- `doc`: If the commit is a change to documentation.
- `test`: If the commit contains a change to the test suite.

## Issues

When reporting issues:

- Include the steps required to reproduce the problem. This information will help us review and fix your issue faster.
- If applicable, include stack trace.
- Big log files are best viewed in a gist (https://gist.github.com). Make sure your gist is public.
- Log files may have sensitive information, please remove this information if at all possible.

## Quick contribution tips and guidelines

This section gives contributors some guidelines.

### We welcome all pull requests

Developing a fix or new feature, however small, takes time. So thank you! Even the smallest corrections or enhancements matter, and we will do everything possible to process them in a timely manner. We will also make sure you get credit for your contributions.

### Design and cleanup proposals

We are constantly cleaning code and re-factoring, and we understand there is almost always a better way to do things. If so, let us know! We love new perspectives, particularly when it helps improve the underlying product.

### Talking to other 3Blades users and contributors

We primarily use our Slack community channel to communicate with 3Blades users and contributors. You can sign up for a free account [here](https://slack.3blades.io/).

### Conventions and Coding Style

Submit unit tests with your changes. We use [jest](https://facebook.github.io/jest/) for all tests in this repo.

Update the documentation when creating or modifying features. Test your documentation changes for clarity, concision, and correctness, as well as a clean documentation build. We base our style guide on the [AP Stylebook](https://en.wikipedia.org/wiki/AP_Stylebook).

For coding style, we base ourselves on:

- [AriBnb style guide](https://github.com/3blades/javascript) for JavaScript
- [PEP8](https://www.python.org/dev/peps/pep-0008/) for Python
- [Effective Go](https://golang.org/doc/effective_go.html) for Golang

The PR should trigger automated style checks.

### Merge approval

The master branch needs to be as healthy as possible. We will do our best to merge code and documentation quickly, but need to balance that with sanity checks.

Maintainers may use LGTM (Looks Good To Me) for documents and comments to indicate acceptance.

### Sign your work

Our projects are open source and we need to do everything possible to keep it that way. By signing, you certify that you wrote the code or that you have the right to send it our way. We use the [developer certificate of origin](http://developercertificate.org/) text to certify contributions.

Every completed PR must have a signature before we can merge:

    Signed-off-by: Joe Smith <joe.smith@email.com>

Please use your real name.

If you set your `user.name` and `user.email` git configs, you can sign your
commit automatically with `git commit -s`.

## 3Blades community guidelines

Refer to our [Code of Conduct](CODE_OF_CONDUCT.md) for specifics. It is based on the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4.
