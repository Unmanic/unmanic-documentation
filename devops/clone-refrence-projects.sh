#!/usr/bin/env bash
###
# File: clone-refrence-projects.sh
# Project: unmanic-documentation
# File Created: Saturday, 20th December 2025 2:45:35 pm
# Author: Josh.5 (jsunnex@gmail.com)
# -----
# Last Modified: Tuesday, 30th December 2025 1:13:20 pm
# Modified By: Josh.5 (jsunnex@gmail.com)
###

#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMP_DIR="${SCRIPT_DIR}/../temp"

declare -A REPOS=(
    ["unmanic"]="https://github.com/Unmanic/unmanic.git"
    ["unmanic-frontend"]="https://github.com/Unmanic/unmanic-frontend.git"
    ["unmanic-plugins"]="https://github.com/Unmanic/unmanic-plugins.git"
)

declare -A BRANCHES=(
    ["unmanic"]="staging"
    ["unmanic-frontend"]="master"
    ["unmanic-plugins"]="official"
)

mkdir -p "${TEMP_DIR}"

for repo in "${!REPOS[@]}"; do
    repo_dir="${TEMP_DIR}/${repo}"
    repo_url="${REPOS[${repo}]}"
    repo_branch="${BRANCHES[${repo}]}"

    if [[ -d "${repo_dir}/.git" ]]; then
        echo "Updating ${repo}..."
        git -C "${repo_dir}" fetch origin
        git -C "${repo_dir}" checkout -B "${repo_branch}" "origin/${repo_branch}"
        git -C "${repo_dir}" reset --hard "origin/${repo_branch}"
        git -C "${repo_dir}" clean -fd
    else
        echo "Cloning ${repo}..."
        git clone --branch "${repo_branch}" "${repo_url}" "${repo_dir}"
    fi
done
