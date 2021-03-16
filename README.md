# Pull Request Thank You - Github Action

## What is it?
This is a Github Action that will post a comment to a Pull Request thanking the user for their submission.

## How do I use it?
### Sample
```
- name: 'Pull Request Thank You'
  uses: GuySWatson/pr-thankyou-action@v1.2
  with:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Full
```
on: pull_request

jobs:
  pr-thankyou-action:
    runs-on: ubuntu-latest
    name: 'Pull Request Thank You'
    steps:
    - name: Checkout
      uses: actions/checkout@v1
    - name: 'Pull Request Thank You'
      uses: GuySWatson/pr-thankyou-action@v1.2
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```