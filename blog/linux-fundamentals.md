---
title: "Linux Fundamentals 'Cheat Sheet'"
author: "Amelia Gianoli"
description: "A basic overview of Linux and DevOps Commands"
published: "2026-2-25"
---
# Linux & DevOps Command Reference

A handy reference for file management, system monitoring, networking, containers, CI/CD, and more.

---

### File and Directory Management
| Command | Description |
|:----------------|--------------------------:|
| `ls` | List files |
| `ls -la` | Detailed list including hidden files |
| `cd /path` | Change directory |
| `pwd` | Show current directory |
| `mkdir dir` | Create directory |
| `rm file` | Remove file |
| `rm -r dir` | Remove directory recursively |
| `cp src dest` | Copy file |
| `mv src dest` | Move/rename file |

---

### File Viewing and Editing
| Command | Description |
|:----------------|--------------------------:|
| `cat file` | View file contents |
| `less file` | Scroll through file |
| `head file` | First 10 lines |
| `tail file` | Last 10 lines |
| `tail -f file` | Follow log output |
| `nano file` | Edit file |
| `vim file` | Edit file (advanced) |

---

### Permissions and Ownership
| Command | Description |
|:----------------|--------------------------:|
| `chmod 755 file` | Change permissions |
| `chown user:group file` | Change owner |
| `umask 022` | Default permission mask |

---

### System Monitoring
| Command | Description |
|:----------------|--------------------------:|
| `top` | Live process view |
| `htop` | Enhanced process viewer |
| `ps aux` | List all processes |
| `free -h` | Memory usage |
| `df -h` | Disk usage |
| `du -sh *` | Directory sizes |
| `uptime` | Load averages |

---

### Networking
| Command | Description |
|:----------------|--------------------------:|
| `ip addr` | Show IP addresses |
| `ip link` | Show interfaces |
| `ip route` | Show routing table |
| `ping host` | Test connectivity |
| `curl url` | HTTP request |
| `wget url` | Download file |
| `ss -tulpn` | Show listening ports |
| `traceroute host` | Trace network path |

---

### Services and Systemd
| Command | Description |
|:----------------|--------------------------:|
| `systemctl status service` | Check service status |
| `systemctl start service` | Start service |
| `systemctl stop service` | Stop service |
| `systemctl restart service` | Restart service |
| `systemctl enable service` | Enable at boot |
| `journalctl -u service` | View service logs |

---

### Package Management

#### Debian/Ubuntu
| Command | Description |
|:----------------|--------------------------:|
| `apt update` | Update package lists |
| `apt install pkg` | Install package |
| `apt remove pkg` | Remove package |

#### RHEL/CentOS/Fedora
| Command | Description |
|:----------------|--------------------------:|
| `dnf install pkg` | Install package |
| `dnf remove pkg` | Remove package |

---

### Users and Groups
| Command | Description |
|:----------------|--------------------------:|
| `useradd user` | Add a user |
| `passwd user` | Set user password |
| `usermod -aG group user` | Add user to group |
| `groups user` | List groups for user |

---

### Archiving and Compression
| Command | Description |
|:----------------|--------------------------:|
| `tar -czvf file.tar.gz dir` | Create archive |
| `tar -xzvf file.tar.gz` | Extract archive |
| `zip file.zip file` | Zip file |
| `unzip file.zip` | Unzip file |

---

### SSH and File Transfer
| Command | Description |
|:----------------|--------------------------:|
| `ssh user@host` | Remote login |
| `scp file user@host:/path` | Copy to remote |
| `rsync -av src dest` | Sync directories |

---

### Processes and Jobs
| Command | Description |
|:----------------|--------------------------:|
| `kill PID` | Kill process |
| `kill -9 PID` | Force kill process |
| `jobs` | List background jobs |
| `bg` | Resume job in background |
| `fg` | Bring job to foreground |

---

### Docker (DevOps Essential)
| Command | Description |
|:----------------|--------------------------:|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (including stopped) |
| `docker images` | Show available images |
| `docker pull <image>` | Download image |
| `docker run <image>` | Run container from image |
| `docker run -it <image> sh` | Interactive shell in container |
| `docker stop <container>` | Stop container |
| `docker start <container>` | Start container |
| `docker rm <container>` | Remove container |
| `docker rmi <image>` | Remove image |
| `docker logs <container>` | View logs |
| `docker exec -it <container> sh` | Execute shell inside container |
| `docker build -t name .` | Build image from Dockerfile |
| `docker-compose up -d` | Start services |
| `docker-compose down` | Stop services |

---

### Git (DevOps Essential)
| Command | Description |
|:----------------|--------------------------:|
| `git clone <repo-url>` | Clone repository |
| `git status` | Show changes |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Commit changes |
| `git push` | Push commits |
| `git pull` | Fetch & merge |
| `git checkout <branch>` | Switch branch |
| `git checkout -b <branch>` | Create & switch branch |
| `git merge <branch>` | Merge branch |
| `git fetch` | Download updates |
| `git diff` | Show file differences |
| `git log --oneline --graph` | Visual commit history |
| `git stash` | Save uncommitted changes |
| `git stash pop` | Restore stashed changes |
| `git reset --hard <commit>` | Reset branch (destructive) |

---

### Kubernetes
| Command | Description |
|:----------------|--------------------------:|
| `kubectl get pods` | List pods |
| `kubectl get svc` | List services |
| `kubectl get nodes` | List cluster nodes |
| `kubectl describe pod <pod>` | Pod details |
| `kubectl logs <pod>` | Pod logs |
| `kubectl exec -it <pod> -- sh` | Open shell inside pod |
| `kubectl apply -f file.yaml` | Apply manifest |
| `kubectl delete -f file.yaml` | Delete resources |
| `kubectl port-forward pod 8080:80` | Forward local port |
| `kubectl rollout status deploy/<name>` | Check rollout |
| `kubectl rollout undo deploy/<name>` | Rollback deployment |
| `kubectl scale deploy/<name> --replicas=3` | Scale deployment |
| `kubectl top pod` | Pod resource usage |
| `kubectl config get-contexts` | List contexts |
| `kubectl config use-context <ctx>` | Switch context |

---

### CI/CD Commands

#### General Pipeline Utilities
| Command | Description |
|:----------------|--------------------------:|
| `curl -X POST <url>` | Trigger remote pipeline |
| `chmod +x script.sh` | Make script executable |
| `sh script.sh` | Run script |
| `env` | List environment variables |
| `export VAR=value` | Set environment variable |

#### GitHub Actions
| Command | Description |
|:----------------|--------------------------:|
| `gh workflow list` | List workflows |
| `gh workflow run <name>` | Trigger workflow |
| `gh run list` | List recent runs |
| `gh run view <id>` | View logs |

#### GitLab CI/CD
| Command | Description |
|:----------------|--------------------------:|
| `gitlab-runner register` | Register runner |
| `gitlab-runner run` | Start runner |
| `gitlab-runner verify` | Verify runner |
| `gitlab-runner exec shell job` | Run CI job locally |

#### Jenkins
| Command | Description |
|:----------------|--------------------------:|
| `jenkins-cli build <job>` | Trigger job |
| `jenkins-cli list-jobs` | List jobs |
| `jenkins-cli console <job>` | View console output |
| `jenkins-cli disable-job <job>` | Disable job |
| `jenkins-cli enable-job <job>` | Enable job |

#### Docker in CI/CD
| Command | Description |
|:----------------|--------------------------:|
| `docker build -t app .` | Build image |
| `docker push app` | Push image |
| `docker login` | Authenticate |
| `docker-compose -f file up -d` | Start multi-service apps |

#### Kubernetes in CI/CD
| Command | Description |
|:----------------|--------------------------:|
| `kubectl apply -f file.yaml` | Deploy manifests |
| `kubectl rollout status deploy/name` | Wait for rollout |
| `kubectl set image deploy/name container=image` | Update container image |