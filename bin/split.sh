#!/usr/bin/env bash

set -e
set -x

CURRENT_BRANCH="1.x"

function split()
{
    SHA1=`./bin/splitsh-lite --prefix=$1`
    git push $2 "$SHA1:refs/heads/$CURRENT_BRANCH" -f
}

function remote()
{
    git remote add $1 $2 || true
}

git pull origin $CURRENT_BRANCH

remote account git@github.com:coleusapp/account.git
remote ui git@github.com:coleusapp/ui.git
remote notes git@github.com:coleusapp/notes.git
remote system git@github.com:coleusapp/system.git
remote calculator git@github.com:coleusapp/calculator.git
remote music git@github.com:coleusapp/music.git
remote bucket git@github.com:coleusapp/bucket.git

split 'src/Coleus/Account' account
split 'src/Coleus/Ui' ui
split 'src/Coleus/Notes' notes
split 'src/Coleus/System' system
split 'src/Coleus/Calculator' calculator
split 'src/Coleus/Music' music
split 'src/Coleus/Bucket' bucket
