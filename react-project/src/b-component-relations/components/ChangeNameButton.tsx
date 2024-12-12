interface Props {
  onNameChange(newName: string): void;
}

export function ChangeNameButton({ onNameChange }: Props) {
  const secretName = "Charlie";

  return (
    <div className="p-2 is-display-flex is-justify-content-end">
      {/* Po kliknięciu buttona wyślij jako argument secretName i wywołaj onNameChange callback! */}
      <button
        className="button is-rounded is-primary"
        onClick={() => onNameChange(secretName)}
      >
        Zmień imię
      </button>
    </div>
  );
}
