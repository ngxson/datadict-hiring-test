describe('Test My Todo App', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
    await page.evaluate(() => {
      window.localStorage.clear();
    });
    await page.reload();
  });

  const checkNote = async (title, content) => {
    await page.waitForSelector('[data-testid="todo-title"]');
    const todoTitle = await page.evaluate(() => {
      return document.querySelector('[data-testid="todo-title"]').textContent;
    });
    const todoContent = await page.evaluate(() => {
      return document.querySelector('[data-testid="todo-content"]').textContent;
    });
    await expect(todoTitle).toEqual(title);
    await expect(todoContent).toEqual(content);
  };

  it('Create a note', async () => {
    await page.waitForSelector('[data-testid="new-todo-save"]');
    await page.type('[data-testid="new-todo-title"]', 'TestTitle');
    await page.type('[data-testid="new-todo-content"]', 'TestContent');
    await page.click('[data-testid="new-todo-save"]');
    await checkNote('TestTitle', 'TestContent');
  });

  it('Edit a note', async () => {
    await page.waitForSelector('[data-testid="todo-edit-btn"]');
    await page.click('[data-testid="todo-edit-btn"]');
    await page.waitForSelector('[data-testid="edit-todo-save"]');
    await page.type('[data-testid="edit-todo-title"]', 'Edited');
    await page.type('[data-testid="edit-todo-content"]', 'Edtied');
    await page.click('[data-testid="edit-todo-save"]');
    await checkNote('TestTitleEdited', 'TestContentEdtied');
  });

  it('Delete a note', async () => {
    await page.waitForSelector('[data-testid="todo-delete-btn"]');
    await page.on('dialog', (dialog) => {
      console.log('dialog');
      dialog.accept();
    });
    await page.click('[data-testid="todo-delete-btn"]');
    const nbOfTitle = await page.evaluate(() => {
      return document.querySelectorAll('[data-testid="todo-title"]').length;
    });
    await expect(nbOfTitle).toEqual(0);
  });
});