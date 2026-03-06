export function executeCommand(cmd, t) {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "help": return t.terminal.help;
    case "clear": return null;
    case "whoami": return t.terminal.whoami;
    case "ls": return "drwxr-xr-x  home\ndrwxr-xr-x  about\ndrwxr-xr-x  work\ndrwxr-xr-x  contact\n-rw-r--r--  application.yml";
    case "sudo": return t.terminal.sudo;
    case "": return "";
    default: return `bash: ${c}: ${t.terminal.notFound}`;
  }
}