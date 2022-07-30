echo "Checking for all submodule updates ..."
cd ..
git submodule update --remote --merge
git add themes/FixIt
git commit -m ":arrow_up: Chore: update FixIt theme version"
git add content/private
git commit -m ":memo: Docs: update private content"