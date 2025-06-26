#!/bin/bash
cd /home/kavia/workspace/code-generation/simpletaskmanager-73886-fd1c4d77/task_manager_frontend_workspace/task_manager_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

