import {NamedPage, addPage} from '@hydrooj/ui-default';
addPage (new NamedPage ('user_register', () => {
	var email = document.getElementsByName('mail')[0];
	email.value = Math.random().toString(36).substr(2) + "@ak.ioi"  //这里可以修改后缀
	var r=confirm("是否使用随机邮箱注册账号?\n\n" +
		"注意!!!\n\n" +
		"1. 如果本站已开启邮箱验证, 则无法使用随机邮箱注册.\n" +
		"2. 如果使用随机邮箱, 将无法使用密码找回功能.\n" +
		"3. 如果自己有邮箱建议使用自己的邮箱.\n" +
		"4. 如果没有邮箱请直接点击确定.\n\n" +
		"点击确定后将使用随机邮箱注册.");
	if (r==true) {
		var btn = document.getElementById('submit');
		btn.click();
	}

}));


