---
title: 数学笔记4：离散数学笔记大全
date: 2023-12-22T13:38:00.000Z
summary: 中国高校离散结构课程期末总结及技巧
---


学好离散数学对于很多领域都有实际的应用，尤其是在以下方面：

1. **计算机科学**：离散数学为计算机算法设计、软件开发、密码学、数据结构等领域提供了数学基础。例如，图论直接应用于网络数据结构和数据库设计，逻辑和布尔代数被用于开发电路和编写高效的算法。
2. **密码学**：离散数学，特别是数论和组合数学，是现代密码学的基础。它帮助设计安全的加密方法来保护信息安全。
3. **网络理论**：网络安全、路由算法、优化网络流等领域都依赖于离散数学的概念。
4. **运筹学和优化**：涉及资源最优分配、路径优化、调度问题等的运筹学问题都需要离散数学。
5. **生物信息学**：生物信息学使用离散数学来分析和解释生物数据，如DNA序列分析、蛋白质结构预测等。
6. **经济学**：经济学中的许多模型和分析方法，如博弈论，都是离散数学的应用。
7. **人工智能和机器学习**：离散数学为理解和构建复杂算法提供了工具，特别是在涉及逻辑推理、图论和优化问题时。

学好离散数学不仅能够增强解决具体问题的能力，而且还能提升逻辑思维和抽象思维能力，这些都是科学研究和工程实践中非常宝贵的技能。



## 集合

集合的元素可以是任何类型的事物。集合也可以是另一个集合的元素。

集合的基本运算包含：并集、交集、相对补、绝对补和对称差。其中：
- 绝对补集是 $$ A $$ 对 $$ E $$ 的相对补集。其中 E 是全集。
- 对称差$$  A\bigoplus B = (A-B)\bigcup (B-A) $$

所谓幂集（Power Set）， 就是原集合中所有的子集（包括全集和[空集](https://baike.baidu.com/item/%E7%A9%BA%E9%9B%86/5016874?fromModule=lemma_inlink)）构成的集族。

## 命题逻辑

首先要学会判断命题。

命题公式有三种类型：
- 重言式：又称永真式。
- 矛盾式：又称永假式。例如 $$ p \land \neg p \Leftrightarrow 0 $$
- 可满足式

借助命题等值式，命题公式可以化为不同的形式，来满足不同的解题需求。称之为**等值演算法**。
- 双重否定律：$$ \neg \neg A \Leftrightarrow A $$
- 德摩根律：$$ \neg (A \lor B) \Leftrightarrow \neg A \land \neg B $$，$$ \neg (A \land B) \Leftrightarrow \neg A \lor \neg B $$
- 吸收律：$$ A \lor (A \land B) \Leftrightarrow A $$，$$ A \land (A \lor B) = A $$
- 矛盾律：$$ A \land \neg A \Leftrightarrow 0 $$
- 排中律：$$  A \lor \neg A \Leftrightarrow 1 $$
- 结合律：$$ (A \land B) \land C \Leftrightarrow A \land (B \land C) $$
- 零律
- **蕴涵等值式**：$$ A \rightarrow B \Rightarrow \neg A \lor B $$

---

又由于一个命题公式可以化为不同的形式，我们指定其中一种形式为标准，称之为**范式**。其中：
- 仅由有限个命题变项或其否定构成的析取式成为**简单析取式**，例如 $$ p $$、$$ p \lor \neg q $$
- 仅由有限个命题变项或其否定构成的合取式称为**简单合取式**，例如 $$ p $$

---

由命题公式可以构成**推理**。推理是从前提推出结论的思维过程。而前提和结论都是一个命题公式。

为了证明推理正确，我们可以采用**构造证明法**。这种方法按照给定的规则进行，其中一些规则建立在一些推理定律之上：
- 等价三段论：$$ ((A \leftrightarrow B)\land(B \leftrightarrow C))\Rightarrow (A \leftrightarrow B) $$
- 析取三段论：$$ (A \lor B) \land \neg A \Leftrightarrow B $$
- 假言三段论：
- 拒取式：$$ (A \rightarrow B) \land \neg B \Rightarrow \neg A $$
- 假言推理：$$ (A \rightarrow B) \land A \Leftrightarrow B $$
- 附加：$$ A \Rightarrow (A \lor B) $$
- 化简：$$ （A \land B) \Rightarrow A $$
- 构造性二难：$$ (A \rightarrow B) \land (C \rightarrow D) \land (A \lor C) \Rightarrow (B \land D) $$

在推理证明的过程中，还有两个特殊的方法，结合推理定律使用：
- 附加前提法
- 归谬法（反证法）





## 二元关系和函数

笛卡尔积的运算结果是**由有序对组成的集合**。每个有序对的第一元素属于A，第二元素属于B。如果A中有m个元素，B中有n个元素，则$$ A \times B $$和$$ B \times A $$中都有mn个元素。

进一步推广，我们规定**如果一个集合为空集或者它的元素都是有序对，则称这个集合是一个二元关系。**

关系像集合一样，可以运算。设$$ F $$、$$ G $$是$$ N $$上的关系，则
- 

关系还可以表示为图。借助图和矩阵可以判断出他们的性质。
| 自反性 |  主对角线元素全为1 |  每个顶点都有环（指向自身） | 
| --- | --- | --- |
| 反自反性 |  主对角线元素全为0 |  每个顶点都没有环 | 
| 对称性 |  矩阵为对称矩阵 |  如果两个顶点之间有边，则一定是一对方向相反的边。 | 
| 反对称性 |   |  如果两个顶点之间有边，则一定是一条有向边。 | 
| 传递性 |   |   | 

此外，关系矩阵还可以用于判断函数的单射、满射或双射：
- 单射：每行有且仅有一个1，并且每列最多有一个1。
- 满射：每行有且仅有一个1，并且每列至少有一个1。
- 双射：每行有且仅有一个1，并且每列有且仅有一个1。（单射且满射）

可将这些关系抽象为图：

![Image](/image/post/371a2852-1266-4449-8ac4-81b96d518d85_Screenshot_2023-12-24_at_19.40.22.png)

若一个关系具有自反性、对称性、传递性，则称这个关系是**等价关系**。

若一个关系具有自反性、反对称性、传递性，则称这个关系是**偏序关系**。

有时我们想在一个关系中添加（尽可能少的）有序对，来让它具备其它性质，我们称新的关系R为闭包。欲使R转换为新的关系，需要借助三种闭包函数：
- $$ t(R) $$： 传递闭包
- $$ s(R) $$：对称闭包
- $$ r(R) $$：自反闭包



## 图论

图由边（edge）和顶点（vertax）组成。图可以大致分为**有向图与无向图**。

有三种特殊无向图需要重点掌握。
- 哈密顿图
  - 哈密顿图：存在哈密顿回路的图。哈密顿回路指**经过图中每个顶点一次且仅一次的回路**。
  - 半哈密顿图：
- 欧拉图
  - 欧拉图：有欧拉回路（欧拉回路是一种特殊的欧拉通路）。欧拉回路指经过图中每条边一次且仅一次并且行遍图中每个顶点的回路（即要回到起点）。将欧拉图与“哥得斯堡七桥”问题关联起来，即可推知欧拉回路与“边”有关。
  - 半欧拉图：有欧拉通路，但没有欧拉回路
- 二部图（二分图）：一个无向图$$ G = <V, E> $$是二部图当且仅当G中没有长度为奇数点回路。

除了这三种特殊图，还要掌握**握手定理**。握手定理内容如下：

进而可以推论：
- 无向图中，各点度数之和等于边数的两倍
- 无向图中，度数为[奇数](https://baike.baidu.com/item/%E5%A5%87%E6%95%B0/403373?fromModule=lemma_inlink)的点一定是有偶数多个
- 有向图中，各点度数之和等于边数的两倍
- 有向图中，出度之和等于入度之和

---

除了用图像来表示图，也可以使用矩阵来表示图。借助矩阵更容易发现图的性质和内在联系。包括：
- 无向图的关联矩阵：行代表每个点，列代表每个边，元素值为顶点$$ v_i $$与边$$ e_j $$的关联次数
- 有向图的可达矩阵：若$$ v_i $$可达$$ v_j $$，则元素值为1
- 有向图的邻接矩阵：矩阵元素值为连接到终点的边的条数
- 有向图的关联矩阵：两点之间无边（无关联）则为0，$$ v_i $$ 为起点则为1，为终点则为-1



## 树

树其实是一种特殊的无向图。具体来说，不含回路的连通无向图称为无向树，简称树。



## 参考文献
- [https://devdocs.io/latex/math-symbols](https://devdocs.io/latex/math-symbols)
- [https://ashki23.github.io/markdown-latex.html#matrices](https://ashki23.github.io/markdown-latex.html#matrices)






