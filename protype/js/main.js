/**
 * Nova Flow - 主JavaScript文件
 * 负责处理主界面导航和核心功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有菜单项
    const menuItems = document.querySelectorAll('.menu-item');
    // 获取内容iframe
    const contentFrame = document.getElementById('content-frame');
    
    // 定义页面路径映射
    const pageMapping = {
        'dashboard': 'pages/dashboard.html',
        'workspace': 'pages/workspace.html',
        'knowledge': 'pages/knowledge.html',
        'tools': 'pages/tools.html',
        'community': 'pages/community.html',
        'settings': 'pages/settings.html',
        'profile': 'pages/profile.html'
    };
    
    // 为每个菜单项添加点击事件监听器
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取目标页面
            const pageName = this.getAttribute('data-page');
            
            // 如果页面存在于映射中，则更改iframe的src
            if (pageMapping[pageName]) {
                contentFrame.src = pageMapping[pageName];
                
                // 更新菜单激活状态
                menuItems.forEach(mi => mi.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 初始化加载默认页面
    if (contentFrame.src === '') {
        contentFrame.src = pageMapping.dashboard;
    }
}); 