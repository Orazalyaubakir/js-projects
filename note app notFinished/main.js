const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');

function createNoteEl(id, content) {
  const element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = 'Enter your note';
  element.value = content;

  element.addEventListener('dblclick', () => {
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNote(notes);
  appEl.remove(element);
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id === id)[0];
  target.content = content;
  saveNote(notes);
}
