---
title: HVV 面经
date: 2023-04-20T01:17:00.000Z
summary: 最近连续参加了几家 hvv 面试，现总结如下。包括中介面和厂商面的内容。
---


最近连续参加了几家 hvv 面试，现总结如下。

通常面试官都是对着简历发问，所以简历一定要字斟句酌。

## 个人经历相关问题

刚开始统一要求自我介绍。笔者很多同学都是提前写好稿子，这个根据个人喜好选择即可，笔者个人喜欢即兴发挥。简单介绍自己的学校，以及护网经历即可，务必沉着、大方。

以下是笔者的**介绍**。
> 我叫xxx，来自四川xx。我先说说我怎么接触这一个领域的吧，我从19年开始做个人站站长，后面就逐渐成为全栈开发，由于需要自己运维网站就接触了很多网安方面的知识。后来就在朋友圈子里和他们一起去了一次护网。

如果被问到**工作经历**，可以这样回答：
> 我之前是在山东汉任短期工作过，做的是渗透测试。主要就是帮忙评估企业和组织的网络系统弱点，并提供相应的解决方案。大概工作流程就是，**首先信息收集，收集子域名、Whois、C段、旁站、Web 系统指纹识别，然后测试 web 系统的漏洞**。

如果被问到**护网经历**，可以这样回答：
> 我2022年参加了国护，前期主要协助客户梳理资产、安全整改加固、策略优化等等，HW期间主要担任角色是分析研判人员，工作就是根据监控组提交的内容判断是什么攻击，攻击结果，具体的攻击内容，然后处置，并产生报告。

如果被问到“有过实际的应急经历吗”，可以这样回答：
> 也不知道算不算应急吧，就是常规的报警，用户那的蜜罐报警了，但是用户扫不出来，就喊我来排查，然后我就用椒图扫出来，然后丢到二线去分析一下，确认是木马就删除了。另外就是扫了几个 webshell 出来，然后先通知用户。

如果被问**你挖掘过哪些漏洞**，可以这样回答**：**
> 国内首例 OpenCore 加载 macOS 内核拓展实现AMD APU的普通x86PC安装macOS13.4
原理：利用EFI引导的通性，在引导 macOS 之前提前加载特定的EFI，使 Apple BIOS 被加载至内存中。进而绕过 macOS 的机型检测。
由于苹果采用的全部是标准硬件+重写驱动，所以我们仅需要欺骗macOS，让他以为我们安装在普通主板上的普通硬件是来自Apple的硬件。(普遍方法）这种实现方法有一个问题，只有苹果为他重写了驱动的硬件才能被正常的驱动。如果这个硬件苹果没有用过，那就不能驱动。AMD的所有驱动都是开源的，因此我们可以对官方的开源驱动进行修改，从而实现在macOS下的驱动。
在之中，作为从初中就开始探索安装macOS至普通电脑过程中。我敏锐的察觉到Apple实现显卡加速的原理仅是将原版的驱动有关DirectX等Windows特有的调用全部转成开源的OpenCl。故我完成了有关调用的替换及适配工作。在画面输出这一难关之中。我敏锐利用ssh的特性实现无画面下 Debug 及输出定制。

## Windows 相关

### 常用命令
- tasklist: 查看进程列表
- regedit: 注册表
- netstat: 查看端口
- dir: 查看当前文件夹内容
- net user: 查看用户（包括影子账户）
- ping: 检查网络联通

### windows 上的常见后门
- shift 后门：将C盘windows目录下面的system32文件里面的sethc.exe应用程序进行转移，并生成 sethc.exe.bak文件。并将cmd.exe拷贝覆盖sethc.exe 查找方式：看下是不是 cmd.exe 的MD5。certutil -hashfile filename MD5

### Windows 加固思路

1. 系统不显示上次登录的账户名。
2. 清理系统无效账户。
3. 按用户类型分配账号
4. 配置密码策略
5. 账户锁定策略
6. 远端系统强制关机设置
7. 本地关机设置
8. 用户权限指派
9. 授权账户本地登录
10. 授权账户从网络访问

---
- 问：Windows上安全日志目录在哪？
- 答：在windows/System32/winevt/Logs下

## Linux 相关

### 常用命令
- w: 显示目前登入系统的用户信息
- who ：查看当前登录用户（tty本地登陆  pts远程登录）
- last ：所有用户的登录记录
- cat .bash_history 查看历史命令
- ps -aux ：ps是用来监控进程的，aux参数代表查看所有进程。

---
- 问：Linux 如何创建计划任务？
- 答：使用 corntab 命令。
- 问：corntab 的计划任务列表存储在哪里？
- 答：位于 /etc/corntab 目录。
- 问：能说说 corn 的详细语法吗？
- 答：参考 [https://blog.csdn.net/chen__yang_/article/details/109523061](https://blog.csdn.net/chen__yang_/article/details/109523061#:~:text=cron%E8%AE%A1%E5%88%92%E4%BB%BB%E5%8A%A1%E8%AF%A6%E8%A7%A3%201%20%E8%AE%A1%E5%88%92%E4%BB%BB%E5%8A%A1%E7%AE%80%E4%BB%8B%20%2A%2A%2A%2A%2A%2A%2A%2A%E7%AE%80%E5%8D%95%E7%9A%84%E9%9C%80%E6%B1%82%2A%2A%2A%2A%2A%2A%2A%2A%201%20...%202%20cron%E5%9F%BA%E7%A1%80,1%20...%204%20%E7%94%A8%E6%88%B7%E7%BA%A7%E7%9A%84%E8%AE%A1%E5%88%92%E4%BB%BB%E5%8A%A1%20crontab%E5%B8%B8%E7%94%A8%E5%8F%82%E6%95%B0%20-u%20%E9%99%84%E5%8A%A0%E8%A6%81%E4%BF%AE%E6%94%B9%E5%85%B6crontab%E7%9A%84%E7%94%A8%E6%88%B7%E7%9A%84%E5%90%8D%E7%A7%B0%E3%80%82%20)。创建、编辑计划任务的命令为crontab -e，查看当前计划任务的命令为crontab -l，删除某条计划任务的命令为crontab -r。
- 问：不错。如何把执行结果输出到文件？
- 答：30 23 * * * /path/to/script.sh > /path/to/logfile.log 2>&1
- 问：Linux 如何查看端口开放情况？
- 答：可以使用 netstat -anp | grep 端口号 命令来查看端口号对应的进程和状态。
- 问：如何判断是否被增加了超级用户？
- 答：查看是否有 UID 为 0 的用户。
- 问：Linux 如何加固？
- 答：删除无用账号、**配置密码策略（复杂度、过期时间）**、限制 su 命令使用 （限制用户使用 su命令变更为其他用户， 防止不当的角色切换） 、限制 ssh 远程登陆root、减少命令记录数（.bash_history）、升级内核版本。

### 攻击者获得文件读取权限后，通常会读取哪些文件？
- /etc/hosts: 主机信息
- /etc/shadow: 存储了系统用户的加密密码和其他安全相关的信息
- /etc/password: 密码
- /root/.bashrc: 环境变量
- /root/.ssh/id_rsa: ssh私钥

## HW 业务相关

### 主机发生安全事件处置流程 

1. 抑制范围：首先判断影响范围，主机断网或者隔离使受害面不继续扩大
2. 收集信息：收集客户信息和中毒主机信息，包括样本
3. 判断类型：判断是否是安全事件，何种安全事件，**勒索、挖矿、断网、DoS** 等等
4. 深入分析：日志分析、进程分析、启动项分析、样本分析方便后期溯源
5. 清理处置：杀掉进程，删除文件，打补丁，删除异常系统服务，清除后门账号防止事件扩大，处理完毕后恢复生产
6. 产出报告：整理并输出完整的安全事件报告。

### HW 期间发现在野0DAY利用怎么处置？

1. 首先确认0day影响产品，危害程度，找到漏洞点；
2. 下线应用；
3. 排查应用日志查找是否有攻击请求；
4. 更新官方发布的最新补丁或者升级版本。

### **IOC(Indicator of Compromise) 失陷指标/特征**

可以反映主机或网络失陷特征信息，这些信息入侵工具、恶意软件和攻击组织的属性，如邮箱、域名、IP、 URL、文件名、文件hash、证书和签名等，简称 IOCs。

### HW 中常见的安全设备有哪些?
- 入侵检测：IDS
- 入侵防御：IPS
- **流量威胁检测：**腾讯御界、奇安信天眼、绿盟、深信服等等。
- 流量监测：科来
- 应用防火墙( **WAF **):绿盟WAF、腾讯云WAF、深信服WAF、阿里云WAF等等
- **蜜罐：**默安蜜罐、知道创宇蜜罐等等**防火墙 **:防火墙(玄武盾)、山石防火墙、360网康/网神防火
- **态势感知 **:绿盟态势感知、奇安信态势感知(目前部分金融客户对攻击IP封禁在态势感知系统上统一做封禁处理)
- SOC：绿盟、奇安信

---
- 问：假设你发现服务器有异常登录情况，解决问题之后，如何进一步排查隐患？

  1. 检查日志：查看服务器的登录日志、系统日志、应用程序日志等，以找出异常登录的时间、来源和使用的凭据。这些信息有助于确定攻击者是如何获得访问权限的，以及攻击者在系统中进行了哪些活动。
  2. 审计用户和权限：审查所有用户帐户，删除不再需要的帐户，检查帐户权限是否符合最小权限原则。确保只有合法用户和合适的权限设置。
  3. 更新系统和软件：确保操作系统和所有安装的软件都是最新的。安装安全补丁以防止已知漏洞被利用。
  4. 审查防火墙和网络设置：检查防火墙规则和网络设置，确保只有必要的端口和服务向外暴露。限制来源IP地址，只允许可信任的IP访问。
  5. 执行恶意软件扫描：运行杀毒软件或其他恶意软件扫描工具，以检测系统中是否存在恶意软件。如果发现恶意软件，请根据扫描工具的建议进行清除。
  6. 确保强大的身份验证机制：使用复杂且不容易被猜测的密码。启用多因素身份验证（MFA）以增加安全性。
  7. 监控异常活动：使用安全信息和事件管理（SIEM）工具或其他日志分析工具，监控服务器上的异常活动。配置警报通知以便在检测到可疑活动时立即收到通知。
  8. 在 Windows 环境下，可以用此命令找出规定时间范围内创建的shell文件 Get-ChildItem -Path "C:\" -Recurse | Where-Object { $*.CreationTime -ge "2023-05-06 00:00:00" -and $*.CreationTime -le "2023-05-06 23:59:59" }

## 中间件

正常情况下一次web的访问顺序是：web浏览器—服务器(硬件)—web容器—web应用服务器—数据库服务器。

**需要注意的是，中间件是一类软件的总称，不是单独的一个软件。**
- 问：常见的中间件有哪些？
- 答：IIS nginx apache tomcat jboss websphere weblogic
- 问：status 和 weblogic 的流量如何区分？
- 答：请求URL中包含.action或.do, 这是struts2的默认请求后缀。weblogic的默认请求后缀是.jsp或.html；请求中包含struts2的默认参数,如:action, method等。weblogic的请求参数比较随意,没有固定模式；
- 问：中间件如何加固？
