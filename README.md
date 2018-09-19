# dotfiles
Personal hacker defaults for macOS environment

### Setting up and configuring SSH

1. Set up your SSH keys
    - Generate a brand new key pair
        ```bash
        $ ssh-keygen -t rsa
        ```
    - Create the `/.ssh` folder in your home folder and copy over any existing SSH key pairs.
        ```bash
        $ cd ~ && mkdir .ssh
        ```
2. Add private SSH key file to keychain.
    ```bash
    $ ssh-add -K ~/.ssh/id_rsa
    ```
3. Create a config file and add your hosts + global settings.
    ```bash
    $ cd ~/.ssh && touch config
    ```
    Host block:
    ```
    Host {name}
        HostName {IP-address or domain}
        User {username}
    ```
    Global settings:
    ```
    Host *
        UseKeychain yes
        AddKeysToAgent yes
        IdentityFile ~/.ssh/id_rsa
        ForwardAgent yes
        AddKeysToAgent yes
    ```

### Setting up MySQL

Run the following SQL query to reset the root password.
```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword';
```


## License
[MIT](LICENSE) © [Max Sandelin](https://maxsandelin.com)
