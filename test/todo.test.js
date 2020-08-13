describe('Test My Todo App', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
  });

  it('Create a note', async () => {
    await page.waitForSelector('[data-testid="new-todo-save"]');
    await page.type('[data-testid="new-todo-title"]', 'TestTitle');
    await page.type('[data-testid="new-todo-content"]', 'TestContent');
    await page.click('[data-testid="new-todo-save"]');
    await page.waitForSelector('[data-testid="todo-title"]');
    const todoTitle = await page.evaluate(() => {
      return document.querySelector('[data-testid="todo-title"]').textContent;
    });
    const todoContent = await page.evaluate(() => {
      return document.querySelector('[data-testid="todo-content"]').textContent;
    });
    await expect(todoTitle).toEqual('TestTitle');
    await expect(todoContent).toEqual('TestContent');
  });
});