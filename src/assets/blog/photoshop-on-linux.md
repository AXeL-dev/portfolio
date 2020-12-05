<p>
    Have you ever tried moving from windows to linux but you couldn't find your favorite softwares..? well, this was past! Now with <a href="https://www.winehq.org/" target="_blank">wine</a>, you can run a bunch of windows apps on linux like if you were on windows.
</p>
<p class="mgt-10">
    So, to install Photoshop CS6 on a debian distribution (Ubuntu, etc..), please follow the instructions below:
</p>
<blockquote>
    sudo apt install wine
</blockquote>
<blockquote>
    wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
</blockquote>
<blockquote>
    sudo mv winetricks /usr/bin/winetricks
</blockquote>
<blockquote>
    winetricks atmlib gdiplus msxml3 msxml6 vcrun2005 vcrun2005sp1 vcrun2008 ie6 fontsmooth-rgb gecko
</blockquote>
<p class="mgt-10">
    Once all requirements installed, you can then run the PS CS6 installer or use this <a href="http://www.mediafire.com/file/f9u3szehp7yx7zd/Photoshop+CS6+Portable.rar" target="_blank">portable version</a> that you can run immediately after extraction.
</p>
<p class="mgt-10">
    To run a <span class="bold-text">.exe</span> file with wine simply use the command:
</p>
<blockquote>
    wine executable_name_and_path.exe
</blockquote>
<p class="mgt-10">
    Enjoy!
</p>