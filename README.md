# NovaFlow
NovaFlow -  新一代 Java LLM 应用开发框架，以流式智能重塑企业级语言模型开发体验

# 🚀项目愿景
让 Java 开发者以极简代码构建生产级 LLM 应用，融合企业开发规范与 AI 原生工作流，提供高性能、可观测、易扩展的智能开发基础设施。

# 🌍 现状与痛点
- 中国拥有 超过 500 万 Java 开发者（2023 年 CSDN 开发者调查报告）主导企业级系统开发，但现有 LLM 工具链（如LangChain/Dify等）90% 为 Python 实现。
- 企业被迫在「AI 创新」与「核心系统重构」间二选一，导致 AI 落地成本激增

- 阿里云《中国企业级应用开发趋势》显示，86% 的国内企业将 Java 作为核心系统首选语言，重写 Python 意味着放弃：
    ✅ 成熟的微服务架构
    ✅ 完善的权限/事务管理
    ✅ 经过验证的性能优化方案
# ⚡开源的价值主张
「让 AI 能力自然生长于企业数字土壤」
1. **无缝融合现有技术栈**
   - 复用 Spring Boot/Spring Cloud/MyBatis/Redis 等 **Java 原生生态**，避免技术债务堆积
   - 基于 Java 21 虚拟线程实现 **高并发请求处理**，性能较 Python 异步方案提升 **3-5倍**（原型测试数据）
2. **企业级工程化支持**
   - 内置 **RBAC 权限控制**，符合金融级安全规范
   - 与 Prometheus/Grafana 深度集成，提供 **AI 专属监控指标**

# 📌技术栈
降低学习成本，前后端采用主流技术实现，基本内容如下：

### 后端

- IDE建议： IDEA
- 语言：Java 17+
- 依赖管理：Maven
- 基础框架：Spring Boot 3.2.4、LangChain4J
- 持久层框架：Mybatis Plus 3.5.10
- 数据库：MySQL 8.0.27
- 向量数据库：Weaviate 1.20.1
- 缓存框架：Redis
- 日志框架：Logback
- 其他：fastjson、swagger-ui、lombok

### 前端

- IDE建议：VS Code
- 语言：TypeScript、Vue3
- 依赖管理：npm
- 基础框架：Vite
- 存储框架：Pinia
- 路由框架：Vue Router
- 其他：Axios、Element-Plus

# 🌟核心能力
1. 开箱即用的 LLM 工具链

- 支持 OpenAI、Gemini、Claude 及国产大模型快速接入
- 内置 RAG 增强、Function Calling、流式响应等 20+ 原子能力
- 基于注解的 Prompt 工程
- 企业级开发范式

2. Spring Boot Starter 深度集成，兼容 Java 17+ 特性
- 可视化编排调试器 + Skywalking 全链路追踪
- RBAC 权限控制与多租户隔离支持
- 模块化扩展架构

3. 插件化设计，支持自定义工具/模型/存储组件
- 内置向量数据库连接器（Redis/PGVector/ElasticSearch）
- Maven/Gradle 多构建工具支持

# 开源共建

我们遵循开放治理模型，欢迎贡献插件/文档/案例，共建 Java LLM 生态！
