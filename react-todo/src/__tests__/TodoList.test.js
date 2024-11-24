import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

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
  
    userEvent.type(input, 'Test Todo');
    userEvent.click(addButton);
  
    // Wait for the component to re-render after state update
    await waitFor(() => {
      const todoItems = screen.getAllByRole('listitem');
      expect(todoItems).toHaveLength(4);
      expect(todoItems[3]).toHaveTextContent('Test Todo');
    });
  });

  it('toggles a todo', () => {
    render(<TodoList />);
    const firstTodoCheckbox = screen.getAllByRole('checkbox')[0];
    userEvent.click(firstTodoCheckbox);
    const firstTodo = screen.getAllByRole('listitem')[0];
    expect(firstTodo).toHaveStyle({ textDecoration: 'line-through' });
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const firstTodoDeleteButton = screen.getAllByRole('button')[0];
    userEvent.click(firstTodoDeleteButton);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
  });
});