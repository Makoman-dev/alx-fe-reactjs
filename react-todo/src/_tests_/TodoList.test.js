import { render, screen, fireEvent } from '@testing-library/react';
import fireEvent from '@testing-library/fire-event';
import TodoList from   
 './TodoList';
fireEvent
describe('TodoList', () => {
  it('renders initial todos',   
 () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
  });

  it('adds a new todo', async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a todo');
    const addButton = screen.getByRole('button', { name: 'Add' });

    fireEvent.type(input, 'Test Todo');
    fireEvent.click(addButton);

    await screen.findByText('Test Todo');
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(4);
  });

  it('toggles a todo', async () => {
    render(<TodoList />);
    const firstCheckbox = screen.getByRole('checkbox');

    fireEvent.click(firstCheckbox);

    await screen.findByText('Learn React', { exact: false, selector: 'span' });
    const firstTodo = screen.getAllByRole('listitem')[0];
    expect(firstTodo).toHaveStyle({ textDecoration: 'line-through' });
  });

  it('deletes a todo', async () => {
    render(<TodoList />);
    const firstDeleteButton = screen.getByRole('button');

    fireEvent.click(firstDeleteButton);

    await screen.findByText('Build a Todo App');
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
  });
});