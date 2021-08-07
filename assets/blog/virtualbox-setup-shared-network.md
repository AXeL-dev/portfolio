During one of my recent projects development, i ended up using a virtual machine to test the communication between a mailing server & my nodejs API.
For that purpose, i needed first to create a VM & then setup a shared network so both my machine & the VM can communicate with each others, & since i went through many solutions before finding the right one, i decided to share some of the knowledge i gained during this little experiment.

I won't go through the steps to install [VirtualBox](https://www.virtualbox.org/), but you can simply try to follow any [tutorial](https://www.google.com/search?q=install+virtualbox) online if you need to.

Starting from this point, i'm assuming you already have installed VirtualBox & also created a virtual machine which can be a Linux distribution or even a Windows OS.

So, let's see how you can setup a shared network in VirtualBox:

<br>

### 1. Using the regular NAT Adapter

First, go to your VM settings, then **Network**, & then go to the **Adapter 1** tab & choose **NAT** in the **Attached to** field, and finally hit `save/ok`.

![NAT](./assets/img/posts/virtualbox/NAT.png)

**Note**: If you are not able to edit your machine settings, you probably need to turn it off first.

Now, if you turn on your virtual machine you should be able to:

- Connect to the Guest machine (VM) from your Host machine on the **10.0.2.2** IP address. To test it you can simply open a terminal & type:
> ping 10.0.2.2

- Connect to the Host machine from the Guest (VM) via the **10.0.2.15** IP address.

**Note**: In case you wanna verify that the IP address of the Guest machine (VM) is correct you can simply get this information from the bottom panel of your VM, by hovering on the network icon as below:

![network-popup](./assets/img/posts/virtualbox/network-popup.png)

### 2. Using the NAT Network Adapter

In some cases, the connection from the Host machine to the Guest (VM) may not work as expected, in that case there is an another solution that we can use & it's called port forwarding. Therefore, let's go back to the VM settings, **Network** section & choose the **NAT Network** option under the **Attached to** field & hit `ok`.

![NAT-network](./assets/img/posts/virtualbox/NAT-network.png)

Next, let's open the **VirtualBox** preferences this time (from the menu `File > Preferences`), then go to **Network** section & edit the **NatNetwork**:

![network-preferences](./assets/img/posts/virtualbox/network-preferences.png)

Next step is to open the **Port Forwarding** settings:

![edit-nat-network](./assets/img/posts/virtualbox/edit-nat-network.png)

Finally, let's setup the port forwarding rules, for example, if you want to forward the port 80 from your Guest machine (VM) to your Host machine you need to add the following rule:

![port-forwarding](./assets/img/posts/virtualbox/port-forwarding.png)

**To know:**
- The Host IP address would always be **127.0.0.1**.
- You can get the Guest/VM IP address by opening a terminal & typing **ifconfig** command on Linux, or **ipconfig** command on Windows.
- & of course you can do the same manipulation with any other port.

Once the port forwarding setup is finished, you can go on your Host machine & access the Guest machine using the IP address 127.0.0.1 followed by the port(s) you've forwarded.

That's all i have to mention in this post, i hope you find it useful & in case you have any thoughts or remarks let me know in the comment section below.

[Bonsoir Elliot!](https://www.youtube.com/watch?v=IfWeTrc9RK8) 😁
