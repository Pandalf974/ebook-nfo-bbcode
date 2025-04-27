import React, { useState } from 'react';

const EbookForm = () => {
  const [form, setForm] = useState({
    title: '',
    language: 'FR',
    type: 'Ebook(s)',
    formats: 'PDF/CBZ',
    publication: '',
    filesCount: '',
    totalSize: '',
    dimensionsWidth: '',
    dimensionsHeight: '',
    ebookList: '',
    scenarists: '',
    illustrators: '',
    colorists: '',
    covers: '',
    translators: '',
    publisher: '',
    coverImage: '',
    summary: '',
    links: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const generateNFO = () => {
    let nfo = `${form.title.toUpperCase()}\n\n`;
    nfo += `Langue : ${form.language}\n`;
    nfo += `Type : ${form.type}\n`;
    nfo += `Format(s) : ${form.formats}\n`;
    nfo += `Parution : ${form.publication}\n`;
    nfo += `Résolution : ${form.dimensionsWidth}\n`;
    nfo += `Nombre de fichier(s) : ${form.filesCount}\n`;
    nfo += `Poids Total : ${form.totalSize}\n`;
    nfo += `Dimensions moyennes : ${form.dimensionsWidth}x${form.dimensionsHeight}\n\n`;
    nfo += `Liste des ebooks :\n${form.ebookList}\n\n`;
    if (form.scenarists) nfo += `Scénariste(s) : ${form.scenarists}\n`;
    if (form.illustrators) nfo += `Dessinateur(s) : ${form.illustrators}\n`;
    if (form.colorists) nfo += `Colorisation : ${form.colorists}\n`;
    if (form.covers) nfo += `Couverture(s) : ${form.covers}\n`;
    if (form.translators) nfo += `Traducteur(s) : ${form.translators}\n`;
    if (form.publisher) nfo += `Éditeur : ${form.publisher}\n`;

    return nfo;
  };

  const generateBBCode = () => {
    return `[center][size=200][color=#000000][b]${form.title}[/b][/color][/size]

[img width=500,height=800]${form.coverImage}[/img]

[img]https://zupimages.net/up/25/05/ksha.jpg[/img]

[b]Scénario :[/b] ${form.scenarists}
[b]Dessin :[/b] ${form.illustrators}
[b]Couleurs :[/b] ${form.colorists}
[b]Couverture(s) :[/b] ${form.covers}
[b]Traduction :[/b] ${form.translators}
[b]Éditeur :[/b] ${form.publisher}

[img]https://zupimages.net/up/25/05/rwvt.jpg[/img]
${form.summary}

[img]https://zupimages.net/up/25/05/rqaw.jpg[/img]

[b]Langue :[/b] [img]https://flagcdn.com/20x15/${form.language.toLowerCase()}.png[/img] ${form.language}
[b]Type :[/b] ${form.type}
[b]Format(s) :[/b] ${form.formats}
[b]Parution :[/b] ${form.publication}
[b]Résolution :[/b] ${form.dimensionsWidth}
[b]Dimensions Moyennes :[/b] ${form.dimensionsWidth}x${form.dimensionsHeight}
[b]Nombre de fichier(s) :[/b] ${form.filesCount}
[b]Poids Total :[/b] ${form.totalSize}

[img]https://zupimages.net/up/25/05/55j6.jpg[/img]
${form.ebookList}

[img]https://zupimages.net/up/25/05/2242.jpg[/img]

[url=/]${form.links}[/url]

[img]https://zupimages.net/up/25/05/9rpl.jpg[/img][/center]`;
  };

  const downloadNFO = () => {
    const element = document.createElement("a");
    const file = new Blob([generateNFO()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${form.title}.nfo`;
    document.body.appendChild(element);
    element.click();
  };

  const copyBBCode = () => {
    navigator.clipboard.writeText(generateBBCode());
    alert('BBCode copié dans le presse-papiers !');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Générateur NFO et BBCode pour ebooks</h1>

      {/* Formulaire */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="title" placeholder="Titre" onChange={handleChange} className="input" />
        <select name="language" onChange={handleChange} className="input">
          <option value="FR">FR</option>
          <option value="EN">EN</option>
        </select>
        <select name="type" onChange={handleChange} className="input">
          <option value="Ebook(s)">Ebook(s)</option>
        </select>
        <select name="formats" onChange={handleChange} className="input">
          <option value="PDF/CBZ">PDF/CBZ</option>
          <option value="PDF/CBR">PDF/CBR</option>
          <option value="CBZ">CBZ</option>
          <option value="CBR">CBR</option>
          <option value="PDF">PDF</option>
        </select>
        <input type="text" name="publication" placeholder="Parution (ex: 09/2024)" onChange={handleChange} className="input" />
        <input type="text" name="filesCount" placeholder="Nombre de fichiers" onChange={handleChange} className="input" />
        <input type="text" name="totalSize" placeholder="Poids total (Mo ou Go)" onChange={handleChange} className="input" />
        <input type="text" name="dimensionsWidth" placeholder="Largeur (résolution)" onChange={handleChange} className="input" />
        <input type="text" name="dimensionsHeight" placeholder="Hauteur" onChange={handleChange} className="input" />
        <textarea name="ebookList" placeholder="Liste des ebooks" onChange={handleChange} className="textarea"></textarea>
        <input type="text" name="scenarists" placeholder="Scénariste(s)" onChange={handleChange} className="input" />
        <input type="text" name="illustrators" placeholder="Dessinateur(s)" onChange={handleChange} className="input" />
        <input type="text" name="colorists" placeholder="Colorisation" onChange={handleChange} className="input" />
        <input type="text" name="covers" placeholder="Couverture(s)" onChange={handleChange} className="input" />
        <input type="text" name="translators" placeholder="Traducteur(s)" onChange={handleChange} className="input" />
        <input type="text" name="publisher" placeholder="Éditeur" onChange={handleChange} className="input" />
        <input type="text" name="coverImage" placeholder="URL de l'image de couverture" onChange={handleChange} className="input" />
        <textarea name="summary" placeholder="Résumé" onChange={handleChange} className="textarea"></textarea>
        <textarea name="links" placeholder="Liens vers d'autres ebooks" onChange={handleChange} className="textarea"></textarea>
      </div>

      {/* Boutons */}
      <div className="flex gap-4 mt-6">
        <button onClick={downloadNFO} className="btn">Télécharger le NFO</button>
        <button onClick={copyBBCode} className="btn">Copier BBCode</button>
      </div>
    </div>
  );
};

export default EbookForm;
